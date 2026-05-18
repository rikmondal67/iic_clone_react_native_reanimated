import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CollaborationCard from '@/components/CollaborationCard/CollaborationCard'
import collaborationdata from '@/staticData/collaboration.js'


const header=()=>{
  return(
    <View style={{alignItems:'center',borderBottomWidth:8,borderBottomColor:'rgb(255,123,0)',borderRadius:40}}>
      <Text style={{fontSize:40,fontWeight:'bold',textAlign:'center'}}>IIC'S <Text style={{color:'rgb(255, 123, 0)'}}>COLLABORATION</Text></Text>
    </View>
  )
}

const CollaborationSection = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={header}
        data={collaborationdata}
        renderItem={({item})=>{
          return(
            <CollaborationCard
              name={item.name}
              photo={item.photo}
              cardurl={item.uri}
            ></CollaborationCard>
          )
        }}
      
      
      ></FlatList>
    </View>
  )
}

export default CollaborationSection