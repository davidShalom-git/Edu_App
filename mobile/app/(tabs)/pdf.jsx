import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar, SafeAreaView, Linking } from 'react-native'
import React from 'react'
import java from '../../assets/images/java.png'
import py from '../../assets/images/py.png'
import mern from '../../assets/images/mern.jpg'

export default function CoursesScreen() {
  // Added PDF links for each course
  const courses = [
    { 
      title: 'Python', 
      img: py, 
      lessons: 12, 
      hours: 4, 
      level: 'Beginner',
      pdfLink: 'https://pdflink.to/b399c003/' // External PDF link for Python course
    },
    { 
      title: 'Java', 
      img: java, 
      lessons: 15, 
      hours: 6, 
      level: 'Intermediate',
      pdfLink: 'https://pdflink.to/b399c003/' // External PDF link for Java course
    },
    { 
      title: 'MERN Stack', 
      img: mern, 
      lessons: 20, 
      hours: 8, 
      level: 'Advanced',
      pdfLink: 'https://pdflink.to/b399c003/' // External PDF link for MERN course
    }
  ]

  const yearSections = [
    { year: 'I', title: 'First Year Courses' },
    { year: 'II', title: 'Second Year Courses' },
    { year: 'III', title: 'Third Year Courses' }
  ]
  
  // Function to open the PDF link in the device's browser
  const openPdfLink = (url) => {
    Linking.openURL(url)
      .catch(err => console.error('An error occurred opening the link:', err));
  };

  const renderCourseCard = (item, index) => {
    const levelColors = {
      'Beginner': { bg: '#e8f5e9', text: '#2e7d32' },
      'Intermediate': { bg: '#fff8e1', text: '#ff8f00' },
      'Advanced': { bg: '#ffebee', text: '#c62828' }
    }
    
    return (
      <TouchableOpacity
        key={index}
        style={{
          width: 220,
          marginRight: 16,
          backgroundColor: 'white',
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 8,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        }}
        onPress={() => openPdfLink(item.pdfLink)} // Added onPress handler to open the PDF link
      >
        <Image
          source={item.img}
          style={{ width: '100%', height: 130 }}
          resizeMode="cover"
        />
        <View style={{ padding: 16 }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: '700', 
            marginBottom: 6,
            color: '#1a1a2e'
          }}>
            {item.title}
          </Text>
          
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
            marginBottom: 12
          }}>
            <Text style={{ 
              fontSize: 13, 
              color: '#666',
              fontWeight: '500'
            }}>
              {item.lessons} Lessons • {item.hours} Hours
            </Text>
          </View>
          
          <View style={{ 
            backgroundColor: levelColors[item.level].bg, 
            paddingHorizontal: 10, 
            paddingVertical: 6, 
            borderRadius: 12,
            alignSelf: 'flex-start'
          }}>
            <Text style={{ 
              color: levelColors[item.level].text, 
              fontSize: 12, 
              fontWeight: '600' 
            }}>
              {item.level}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const renderYearSection = (section, index) => {
    return (
      <View 
        key={index} 
        style={{ 
          paddingHorizontal: 20, 
          marginBottom: 32,
        }}
      >
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 20,
          justifyContent: 'center'
        }}>
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#4a6fef',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12
          }}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16
            }}>
              {section.year}
            </Text>
          </View>
          <Text style={{
            fontSize: 22,
            fontWeight: '800',
            color: '#333',
          }}>
            {section.title}
          </Text>
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          contentContainerStyle={{ paddingLeft: 4, paddingRight: 20 }}
        >
          {courses.map((item, idx) => renderCourseCard({...item, level: index === 0 ? 'Beginner' : index === 1 ? 'Intermediate' : 'Advanced'}, idx))}
        </ScrollView>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      <View style={{ paddingTop: 16, paddingHorizontal: 20, marginBottom: 20 }}>
        <Text style={{
          fontSize: 28,
          fontWeight: '900',
          color: '#1a1a2e',
          letterSpacing: -0.5
        }}>
          Academic Courses
        </Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          marginTop: 6
        }}>
          Explore courses for each academic year
        </Text>
      </View>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
      >
        {yearSections.map((section, index) => renderYearSection(section, index))}
      </ScrollView>
    </SafeAreaView>
  )
}