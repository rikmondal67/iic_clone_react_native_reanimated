import { View, Text ,useWindowDimensions} from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import AboutCard from '@/components/AboutCard/AboutCard'
import TechnologyCardSection from './TechnologyCardSection'
import Alumnicomment from './Alumnicomment'

const AboutSection = () => {
  const { height, width } = useWindowDimensions();
  return (

    <View style={{}}>
    

        <View style={{alignItems:'center',padding:40}}>
          <Text style={{
            fontSize:40,
            // textDecorationLine:'underline',
                    borderBottomColor:'rgb(255,154,0)',
            borderBottomWidth:10,
            fontWeight:'bold',
            padding:20,
            borderRadius:20,
                }}>ABOUT <Text style={{color:'rgb(255,154,0)'}}>IIC</Text></Text>
        </View>

        <View style={{marginBottom:'30%',flex:1,alignItems:'center'}}>
         <Image
         source={{ uri: 'https://www.iicnitdgp.in/assets/iicAbout-B1tFqEVW.jpg' }}
         style={{ width: width*0.9, height: height*0.28 ,borderRadius:30 ,minHeight:350,}}/>

        </View>


        <View style={{flex:1,alignItems:'center'}}>
        <Text style={{marginTop:40, fontSize:22, fontWeight:'bold',textDecorationLine:'underline'}}>Institution's Innovation Council</Text>

        </View>

        <View>
         <AboutCard></AboutCard>

        </View>

        <View>

      <TechnologyCardSection></TechnologyCardSection>
        </View>

      <View>
        <Alumnicomment></Alumnicomment>
      </View>

      
      <Text>yahoo</Text>
      <Text>yahoo</Text>
      <Text>yahoo</Text>

      </View>
      

    // <View style={{flex:1}}>

      







        // <TechnologyCardSection></TechnologyCardSection>




        // </View>

        


   
  )
}

export default AboutSection