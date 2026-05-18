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

const ProfileCard = ({ name, role, linkedin, photo }) => {
  const [imageError, setImageError] = useState(false)

  const { width } = useWindowDimensions()

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          minHeight: 420,
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

          {/* Role */}
          <Text
            style={{
              fontSize: 18,
              marginTop: 8,
              textAlign: 'center',
              color: '#666',
            }}
          >
            {role}
          </Text>

          {/* LinkedIn Button */}
          {linkedin ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => Linking.openURL(linkedin)}
              style={{
                marginTop: 28,
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
                  paddingHorizontal: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesome
                  name="linkedin"
                  size={22}
                  color="#fff"
                  style={{ marginRight: 10 }}
                />

                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '700',
                  }}
                >
                  Connect
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  )
}

export default ProfileCard