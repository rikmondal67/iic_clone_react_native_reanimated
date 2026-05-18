import { Text, useWindowDimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'

const text =
  "The Institution's Innovation Council (IIC) is dedicated to fostering a vibrant culture of innovation and incubation among faculty and students at NIT Durgapur. Our mission is to drive creativity and entrepreneurial spirit, resulting in the establishment of successful startups. These ventures, promoted and owned by our talented faculty and students, showcase the innovative potential and collaborative efforts within our community. By fostering collaboration and a proactive mindset, the IIC is dedicated to making NIT Durgapur a hub of innovation, where ideas are turned into reality, and the next generation of entrepreneurs is born"

const AboutCard = () => {
  const { width } = useWindowDimensions()

  return (
    <View>
      <LinearGradient
        colors={['#ff9f43', '#ff7b00', '#ff5e00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: width * 0.9,
          padding: 18,
          borderRadius: 20,

          // iOS shadow
          shadowColor: '#ff6a00',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8,

          // Android shadow
          elevation: 7,

          marginVertical: 10,
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: '#fffaf5',
            lineHeight: 24,
            fontWeight: '500',
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </View>
  )
}

export default AboutCard