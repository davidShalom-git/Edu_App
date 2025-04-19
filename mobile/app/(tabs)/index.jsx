import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar, Button } from 'react-native'
import React from 'react'
import edu from '../../assets/images/edu.jpg'
import java from '../../assets/images/java.png'
import py from '../../assets/images/py.png'
import mern from '../../assets/images/mern.jpg'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuthStore } from '../../store/authStore'
import learn from '../../assets/images/learn.jpg'
import success from '../../assets/images/success.jpeg'
import course from '../../assets/images/course.jpg'
import study from '../../assets/images/study.png'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Index() {
  const { logout } = useAuthStore()


  const title = [
    { title: 'Python', img: py },
    { title: 'Java', img: java },
    { title: 'Mern', img: mern }
  ]


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
        {/* Header Section with Logout Button */}
        <View style={{ paddingHorizontal: 20, paddingTop: 60, paddingBottom: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ff3b30',
                padding: 10,
                borderRadius: 25,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={logout}
            >
              <Ionicons name="log-out-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <LinearGradient
            colors={['#4a6fef', '#2e4cd0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 30,
              padding: 16,
              alignSelf: 'center',
            }}
          >
            <Text style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>E-Learning Platform</Text>
          </LinearGradient>
        </View>

        {/* Hero Image */}
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Image
            source={edu}
            style={{
              width: 250,
              height: 250,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
            }}
            resizeMode="cover"
          />
        </View>

        {/* Feature Cards */}
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 20,
          marginBottom: 16,
          color: '#333',
          textAlign: 'center'
        }}>
          Start Your Journey
        </Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 30,
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
              width: '48%',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#f0f0f0',
            }}
          >
            <View style={{
              backgroundColor: '#e8f1ff',
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}>
              <Image
                source={learn}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                }}
              />
            </View>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Learn</Text>
            <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 6 }}>
              Interactive courses
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
              width: '48%',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#f0f0f0',
            }}
          >
            <View style={{
              backgroundColor: '#fff0e8',
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}>
              <Image
                source={success}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                }}
              />
            </View>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Success</Text>
            <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 6 }}>
              Track your progress
            </Text>
          </TouchableOpacity>
        </View>

        {/* Institution Section */}
        <LinearGradient
          colors={['#f8f9ff', '#ffffff']}
          style={{
            marginTop: 10,
            paddingVertical: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Text style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: '#333',
              marginBottom: 6,
            }}>
              Our Institution
            </Text>
            <View style={{
              height: 3,
              width: 40,
              backgroundColor: '#4a6fef',
              borderRadius: 10
            }} />
          </View>

          <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            marginHorizontal: 20,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 5,
            marginBottom: 30,
          }}>
            <Image
              source={edu}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 16,
                marginBottom: 16,
              }}
              resizeMode="cover"
            />
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 10,
              color: '#333'
            }}>
              Excellence in Education
            </Text>
            <Text style={{
              textAlign: 'justify',
              lineHeight: 20,
              color: '#555',
            }}>
              Our institution offers world-class learning experiences tailored to meet your educational goals. With expert instructors and cutting-edge resources, we provide a supportive environment for students to excel and reach their full potential.
            </Text>

          </View>

          {/* Featured Courses */}
          <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 16,
              color: '#333'
            }}>
              Featured Courses
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: -5 }}
            >
              {title.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 200,
                    marginRight: 15,
                    backgroundColor: 'white',
                    borderRadius: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    elevation: 2,
                    overflow: 'hidden',
                    marginBottom: 5,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ width: '100%', height: 100 }}
                    resizeMode="cover"
                  />
                  <View style={{ padding: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 4 }}>
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#777', marginBottom: 8 }}>
                      12 Lessons • 4 Hours
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{
                        backgroundColor: '#e8f1ff',
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 8
                      }}>
                        <Text style={{ color: '#4a6fef', fontSize: 12, fontWeight: '500' }}>
                          Beginner
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </LinearGradient>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ backgroundColor: 'black', color: 'white', padding: 15, width: 150, textAlign: 'center', borderRadius: 30, fontWeight: 'bold', fontSize: 20 }}>Study</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 30,
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
              width: '48%',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#f0f0f0',
            }}
            onPress={() => router.push('/(tabs)/pdf')}
          >
            <View style={{
              backgroundColor: '#e8f1ff',
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}>
              <Image
                source={study}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                }}
              />
            </View>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Material</Text>
            <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 6 }}>
              Interactive courses
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
              width: '48%',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#f0f0f0',
            }}

            onPress={() => router.push('/(tabs)/video')}
          >
            <View style={{
              backgroundColor: '#fff0e8',
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}>
              <Image
                source={course}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                }}
              />
            </View>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Video</Text>
            <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 6 }}>
              Track your progress
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 12 }}>
          <Text style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#555',
            letterSpacing: 0.5
          }}>
            © All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </>
  )
}