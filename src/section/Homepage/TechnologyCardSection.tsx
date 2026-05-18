import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TechnologyCard from '@/components/TechnologyCard/TechnologyCard'
import techData from '@/staticData/techData.js'

const TechnologyCardSection = () => {
  return (
    <View style={{}}>

        <View style={{flex:1,alignItems:'center'}}>

          <Text style={{
            padding:20,
            fontSize:30,
            textAlign:'center',
            fontWeight:'bold'
          }}>TECHNOLOGICAL VERTICALS OF IIC</Text>
          </View>
      

      <FlatList
          data={techData}
          renderItem={({item})=>(
            
            <View style={{
              padding:15
            }}>
              <TechnologyCard title={item.title} description={item.description}></TechnologyCard>
            </View>
  )}
      ></FlatList>
     
    </View>
  )
}

export default TechnologyCardSection