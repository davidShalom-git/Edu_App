import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,

    register: async (Name, Email, Password) => {
        set({ isLoading: true });

        try {
            const response = await fetch('http://192.168.111.236:6300/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Name,
                    Email,
                    Password
                })
            })
            const data = await response.json();
            console.log("Register Response", data)

            if (!response.ok) throw new Error(data.message || 'Something Went Strong')

            // Store the complete user object
            await AsyncStorage.setItem('user', JSON.stringify(data.user || { Name }))
            await AsyncStorage.setItem('token', data.token)

            set({ token: data.token, user: data.user || { Name }, isLoading: false })
            console.log("Auth state after register:", { token: data.token, user: data.user || { Name } })
            return {
                Success: true
            }
        }
        catch (error) {
            console.log("Register Error", error)
            set({ isLoading: false })
            return { Success: false, error: error.message }
        }
    },

    login: async (Email, Password) => {
        set({ isLoading: true });

        try {
            const response = await fetch('http://192.168.111.236:6300/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Email,
                    Password
                })
            });

            const data = await response.json();
            console.log("API Response", data)

            if (!response.ok) throw new Error(data.message || "Something Went Wrong")

            // Store the complete user object
            await AsyncStorage.setItem('user', JSON.stringify(data.user || { Name: data.Name }))
            await AsyncStorage.setItem('token', data.token)

            set({ token: data.token, user: data.user || { Name: data.Name }, isLoading: false })
            console.log("Auth state after login:", { token: data.token, user: data.user || { Name: data.Name } })
            
            return {
                Success: true
            };
        } catch (error) {
            console.log("Login Error", error)
            set({ isLoading: false })
            return { Success: false, error: error.message }
        }
    },

    checkAuth: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const userJson = await AsyncStorage.getItem('user');
            
            let user = null;
            if (userJson) {
                try {
                    user = JSON.parse(userJson);
                } catch (parseError) {
                    console.log("Error parsing user JSON:", parseError);
                }
            }
            
            console.log("CheckAuth results:", { token, user });
            set({ token, user });
            
            return Boolean(token && user);
        } catch (error) {
            console.log("Check Auth Error", error);
            return false;
        }
    },

    logout: async () => {
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');
            set({ token: null, user: null });
            console.log("User logged out successfully");
            router.push('/(auth)')
            return true;
        } catch (error) {
            console.log("Logout Error", error);
            return false;
        }
    }
}))