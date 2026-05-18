import { View } from 'react-native'
import React from 'react'
import TypedText from 'react-native-typed-text'
import { TypeAnimation } from 'react-native-type-animation';



const Dynamicheading = () => {

  return (
 <TypeAnimation
      sequence={[
      {text:'Change'},
      {text:'Growth.'},
      {text:'Evolution'},
      {text:'Creativity'}
    ]}
      loop
      style={{
        color: '#ff8635',
       
        fontSize: 30,
        fontWeight:'bold'
      }}
    /> 
   
    
  )
}

export default Dynamicheading