import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Dynmaicheading from '../../components/DynamicHeading/Dynamicheading'
import Carouselbar from '@/components/Carousels/Carouselbar'



const HeroSection = () => {
  return (
    
    <View>
      <View style={{marginLeft:5}}>
        
        <Text style={{
          fontSize:35,
          fontWeight:'bold',
          color:'#ff8635'
        }}
        >INSTITUTION'S INNOVATION COUNCIL</Text>
        <Text style={{
          fontSize:25,

        }}>Innovation & Incubation Cell</Text>
        <Dynmaicheading></Dynmaicheading>
        <View style={{paddingTop:30}}>

        <Carouselbar></Carouselbar>
        </View>
        </View>
    </View>
    
  )
}

export default HeroSection