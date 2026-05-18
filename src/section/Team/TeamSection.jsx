import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import {teamdata} from './teamdata.js'

// const teamdata = [
//   {
//     _id: '1',
//     name: 'John',
//   },
//   {
//     _id: '2',
//     name: 'Jane',
//   },
// ]
function header({}){
  return(
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:40,fontWeight:'bold',borderBottomColor:'rgb(255,128,0)',borderBottomWidth:10, borderRadius:10}}>Meet Our <Text style={{color:'rgb(255, 128, 0)'}}>Team</Text></Text>
    </View>
  )
}

const TeamSection = () => {
  return (
    <FlatList
      ListHeaderComponent={header}
      data={teamdata.users}
      renderItem={({item})=>{return(<View>
        <ProfileCard
          name={item.name}
          role={item.designation}
          linkedin={item.extra.linkedin}
          photo={item.photo}
        ></ProfileCard>
      </View>)}}
      keyExtractor={(item)=>item._id}
    >

    </FlatList>
  )
}

export default TeamSection