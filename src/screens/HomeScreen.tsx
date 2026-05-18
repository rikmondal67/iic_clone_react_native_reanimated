import { ScrollView, View } from 'react-native'
import React from 'react'
import HeroSection from '@/section/Homepage/HeroSection'
import AboutSection from '@/section/Homepage/AboutSection'
import Navbar from '@/components/Navbar/Navbar'

const HomeScreen = () => {
  return (
    
    <ScrollView>
   


      
    <View style={{backgroundColor:'#ffdfca' }} >

      <View>
      <Navbar></Navbar>
      </View>
      <View>
      <HeroSection />

      </View>
      <View>
      <AboutSection />

      </View>

      
    </View>

    </ScrollView>
     


    
  )
}

export default HomeScreen