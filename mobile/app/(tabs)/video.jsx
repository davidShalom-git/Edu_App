import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar, SafeAreaView, Linking } from 'react-native'
import React, { useState } from 'react'
import java from '../../assets/images/java.png'
import py from '../../assets/images/py.png'
import mern from '../../assets/images/mern.jpg'

export default function CoursesScreen() {
  const [activeTab, setActiveTab] = useState('I')
  
  // Modified to include video information and YouTube links
  const courses = [
    { 
      title: 'Python', 
      img: py, 
      videos: 12, 
      duration: "4:30", 
      level: 'Beginner',
      description: 'Learn Python fundamentals and build your first applications',
      youtubeLink: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc'
    },
    { 
      title: 'Java', 
      img: java, 
      videos: 15, 
      duration: "6:15", 
      level: 'Intermediate',
      description: 'Master Java programming and OOP concepts',
      youtubeLink: 'https://www.youtube.com/watch?v=grEKMHGYyns'
    },
    { 
      title: 'MERN Stack', 
      img: mern, 
      videos: 20, 
      duration: "8:45", 
      level: 'Advanced',
      description: 'Build full-stack applications with MongoDB, Express, React and Node',
      youtubeLink: 'https://www.youtube.com/watch?v=7CqJlxBYj-M'
    }
  ]

  const yearSections = [
    { year: 'I', title: 'First Year Lectures' },
    { year: 'II', title: 'Second Year Lectures' },
    { year: 'III', title: 'Third Year Lectures' }
  ]
  
  // Function to open the YouTube link
  const openVideoLink = (url) => {
    Linking.openURL(url)
      .catch(err => console.error('An error occurred opening the video link:', err));
  };

  const renderCourseCard = (item, index) => {
    const levelColors = {
      'Beginner': { bg: '#e3fcef', text: '#0c6e43' },
      'Intermediate': { bg: '#fff4e5', text: '#b75800' },
      'Advanced': { bg: '#ffe8ec', text: '#c11534' }
    }
    
    return (
      <TouchableOpacity
        key={index}
        style={{
          width: 240,
          marginRight: 16,
          backgroundColor: 'white',
          borderRadius: 24,
          overflow: 'hidden',
          marginBottom: 8,
          elevation: 10,
          shadowColor: '#0000001a',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.2,
          shadowRadius: 15,
        }}
        onPress={() => openVideoLink(item.youtubeLink)}
      >
        <View style={{ position: 'relative' }}>
          <Image
            source={item.img}
            style={{ width: '100%', height: 150 }}
            resizeMode="cover"
          />
          {/* Gradient overlay */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundGradient: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
          }} />
          
          {/* Play button overlay */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: 'rgba(255,255,255,0.95)',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 8,
            }}>
              <View style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderLeftWidth: 18,
                borderRightWidth: 0,
                borderBottomWidth: 12,
                borderTopWidth: 12,
                marginLeft: 5,
                borderLeftColor: '#FF0000',
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent'
              }} />
            </View>
          </View>
          
          {/* Video count badge */}
          <View style={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: 16,
            paddingVertical: 4,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: '#FF0000',
              marginRight: 6
            }} />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>{item.videos} Videos</Text>
          </View>
        </View>
        
        <View style={{ padding: 18 }}>
          <Text style={{ 
            fontSize: 20, 
            fontWeight: '700', 
            marginBottom: 4,
            color: '#14142b'
          }}>
            {item.title}
          </Text>
          
          <Text style={{
            fontSize: 14,
            color: '#595959',
            marginBottom: 10,
            lineHeight: 20
          }}>
            {item.description}
          </Text>
          
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12
          }}>
            <View style={{ 
              backgroundColor: levelColors[item.level].bg, 
              paddingHorizontal: 12, 
              paddingVertical: 6, 
              borderRadius: 12,
            }}>
              <Text style={{ 
                color: levelColors[item.level].text, 
                fontSize: 12, 
                fontWeight: '600' 
              }}>
                {item.level}
              </Text>
            </View>
            
            <Text style={{ 
              fontSize: 13, 
              color: '#666',
              fontWeight: '500'
            }}>
              {item.duration} Hours
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafc' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafc" />
      
      <View style={{ paddingTop: 20, paddingHorizontal: 24, marginBottom: 16 }}>
        <Text style={{
          fontSize: 32,
          fontWeight: '800',
          color: '#14142b',
          letterSpacing: -0.5
        }}>
          Learning Hub
        </Text>
        <Text style={{
          fontSize: 16,
          color: '#595959',
          marginTop: 6,
          letterSpacing: 0.2
        }}>
          Discover high-quality video courses for every level
        </Text>
      </View>
      
      {/* Year tabs */}
      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 20,
      }}>
        {yearSections.map((section) => (
          <TouchableOpacity 
            key={section.year}
            onPress={() => setActiveTab(section.year)}
            style={{
              marginRight: 12,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 16,
              backgroundColor: activeTab === section.year ? '#4a6fef' : 'transparent',
            }}
          >
            <Text style={{
              color: activeTab === section.year ? 'white' : '#595959',
              fontWeight: activeTab === section.year ? '600' : '500',
              fontSize: 15
            }}>
              Year {section.year}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {yearSections.map((section, index) => (
          activeTab === section.year && (
            <View key={index} style={{ paddingHorizontal: 24, marginBottom: 32 }}>
              <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#14142b',
                marginBottom: 20,
              }}>
                {section.title}
              </Text>
              
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                contentContainerStyle={{ paddingRight: 24 }}
              >
                {courses.map((item, idx) => renderCourseCard({
                  ...item, 
                  level: index === 0 ? 'Beginner' : index === 1 ? 'Intermediate' : 'Advanced'
                }, idx))}
              </ScrollView>
            </View>
          )
        ))}
        
        {/* Featured section */}
        <View style={{ 
          paddingHorizontal: 24,
          marginTop: 10,
          marginBottom: 30
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <Text style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#14142b'
            }}>
              Featured Courses
            </Text>
            
            <TouchableOpacity>
              <Text style={{
                color: '#4a6fef',
                fontWeight: '600',
                fontSize: 14
              }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{
            backgroundColor: '#4a6fef',
            borderRadius: 24,
            padding: 20,
            overflow: 'hidden'
          }}>
            <View style={{
              position: 'absolute',
              right: -20,
              top: -20,
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundColor: 'rgba(255,255,255,0.1)'
            }} />
            
            <View style={{
              position: 'absolute',
              right: 40,
              bottom: -40,
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'rgba(255,255,255,0.08)'
            }} />
            
            <Text style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '700',
              marginBottom: 10
            }}>
              New Data Science Course
            </Text>
            
            <Text style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 15,
              lineHeight: 22,
              marginBottom: 20,
              width: '70%'
            }}>
              Learn Python, statistics and machine learning fundamentals
            </Text>
            
            <TouchableOpacity style={{
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 12,
              alignSelf: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#4a6fef',
                fontWeight: '600',
                fontSize: 14,
                marginRight: 6
              }} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=7CqJlxBYj-M')}>
                Explore Now
              </Text>
              <View style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderTopWidth: 5,
                borderBottomWidth: 5,
                borderLeftWidth: 8,
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: '#4a6fef'
              }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}