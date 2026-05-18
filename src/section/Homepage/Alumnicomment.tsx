import { View, Text } from 'react-native'
import React from 'react'
import LoopingText from '@/components/LoopingText/LoopingText'

const Alumnicomment = () => {
  return (
            <View>

             <View style={{flex:1,alignItems:'center',}}>
               <Text style={{paddingBottom:10,fontSize:30,fontWeight:'bold',borderBottomWidth:10,borderRadius:10,borderColor:'#ff8635'}}>WHAT OUR{' '} 
                 <Text style={{color:'#ff8635'}}>ALUMNI</Text> {''}
                 SAY</Text>
             </View>
             <View>
                <LoopingText></LoopingText>
             </View>
            </View>
    
  )
}

export default Alumnicomment