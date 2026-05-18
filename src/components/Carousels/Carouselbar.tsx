import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Image } from 'react-native';

const Carouselbar = () => {
  const images = [
    'https://sandiptostoragecheck.blob.core.windows.net/uploads/carousel-1755698376215-f2be76ff-e7a6-436b-b625-d76b7b5ae0ef.jpeg',
    'https://sandiptostoragecheck.blob.core.windows.net/uploads/carousel-1755699792440-42.jpg',
    'https://sandiptostoragecheck.blob.core.windows.net/uploads/carousel-1755698606516-20.jpg',
    'https://sandiptostoragecheck.blob.core.windows.net/uploads/carousel-1755698674573-16.jpg',
    'https://sandiptostoragecheck.blob.core.windows.net/uploads/carousel-1755698645344-18.jpg',
  ];

  const [index, setIndex] = useState(0);

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(40)).current;

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
    ]).start();
  };

  useEffect(() => {
    animateIn();

    const interval = setInterval(() => {
      // EXIT
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
        // NEXT IMAGE
        setIndex((prev) => (prev + 1) % images.length);

        // RESET
        opacity.setValue(0);
        translateY.setValue(40);

        // ENTER
        animateIn();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        height: 220,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.Image
        source={{ uri: images[index] }}
        style={{
          width: '100%',
          height: '100%',
          opacity: opacity,
          transform: [{ translateY: translateY }],
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Carouselbar;