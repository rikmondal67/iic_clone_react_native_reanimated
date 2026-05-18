import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const TechnologyCard = ({ title, description }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <LinearGradient
        colors={['#ff9f43', '#ff7b00', '#ff5e00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 30,
          padding: 20,
          minHeight: 260,
          width: width * 0.9,
          alignItems: 'center',
          justifyContent: 'center',

          // iOS shadow
          shadowColor: '#ff6a00',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8,

          // Android shadow
          elevation: 8,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            paddingBottom: 10,
          }}
        >
          💡
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            marginBottom: 12,
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#fffaf5',
            lineHeight: 28,
          }}
        >
          {description}
        </Text>
      </LinearGradient>
    </View>
  )
}

export default TechnologyCard