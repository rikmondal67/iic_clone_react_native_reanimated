import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from '@react-native-vector-icons/fontawesome'

const CollaborationCard = ({ name, photo, cardurl }) => {
  const [imageError, setImageError] = useState(false)

  const { width } = useWindowDimensions()

  const handleOpenCard = async () => {
    if (!cardurl) return

    try {
      await Linking.openURL(cardurl)
    } catch (error) {
      console.log('Failed to open URL:', error)
    }
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          minHeight: 400,
          width: width * 0.85,
          maxWidth: 700,
          borderRadius: 40,
          overflow: 'hidden',
          margin: 20,
          elevation: 8,
          backgroundColor: '#fff',
        }}
      >
        {/* Top Section with Orange Gradient */}
        <LinearGradient
          colors={['#ff9f43', '#ff7b00', '#ff5e00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            paddingTop: 35,
            paddingBottom: 35,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Circular Image */}
          <View
            style={{
              height: 165,
              width: 165,
              borderRadius: 82.5,
              borderWidth: 5,
              borderColor: '#fff',
              overflow: 'hidden',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
            }}
          >
            <Image
              source={
                imageError || !photo
                  ? require('@/assets/profile.png')
                  : { uri: photo }
              }
              onError={() => setImageError(true)}
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="cover"
            />
          </View>
        </LinearGradient>

        {/* Bottom Section */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fffaf5',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          {/* Name */}
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#222',
            }}
          >
            {name}
          </Text>

          {/* Subtitle */}
          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              color: '#888',
              textAlign: 'center',
            }}
          >
            Collaboration Partner
          </Text>

          {/* Gradient Button */}
          {cardurl ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleOpenCard}
              style={{
                marginTop: 30,
                borderRadius: 30,
                overflow: 'hidden',
                elevation: 5,
              }}
            >
              <LinearGradient
                colors={['#ff9f43', '#ff6a00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 34,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesome
                  name="external-link"
                  size={18}
                  color="#fff"
                  style={{ marginRight: 10 }}
                />

                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: '700',
                  }}
                >
                  Visit Site
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  )
}

export default CollaborationCard