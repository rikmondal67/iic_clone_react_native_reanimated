import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const LoopingText = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      year: '2022',
      comment: 'Amazing experience with the platform.',
    },
    {
      name: 'Priya Das',
      year: '2023',
      comment: 'The mentors were extremely supportive.',
    },
    {
      name: 'Arjun Roy',
      year: '2024',
      comment: 'Helped me grow my technical skills a lot.',
    },
  ]

  const [index, setIndex] = useState(0)

  const opacity = useRef(new Animated.Value(0)).current
  const translateY = useRef(new Animated.Value(40)).current

  const animateIn = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start()
  }

  useEffect(() => {
    animateIn()

    const interval = setInterval(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -40,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIndex((prev) => (prev + 1) % testimonials.length)

        opacity.setValue(0)
        translateY.setValue(40)

        animateIn()
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[index]

  return (
    <LinearGradient
      colors={['#ff9f43', '#ff7b00', '#ff5e00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        padding: 20,
        marginTop: 40,
        borderRadius: 25,
        width: '90%',
        alignSelf: 'center',
        minHeight: 220,
        justifyContent: 'center',

        // iOS shadow
        shadowColor: '#ff6a00',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,

        // Android shadow
        elevation: 8,
      }}
    >
      <Animated.View
        style={{
          opacity: opacity,
          transform: [{ translateY: translateY }],
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          {current.name}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: '#fff3e8',
            marginTop: 4,
            fontWeight: '600',
          }}
        >
          Batch {current.year}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: '#fffaf5',
            marginTop: 20,
            lineHeight: 28,
          }}
        >
          "{current.comment}"
        </Text>
      </Animated.View>
    </LinearGradient>
  )
}

export default LoopingText