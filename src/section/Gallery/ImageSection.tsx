import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  StyleSheet,
} from 'react-native';

import FastImage from '@d11/react-native-fast-image';

import { gallerydata } from './gallerydata.js';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Photo{' '}
        <Text style={styles.galleryText}>
          Gallery
        </Text>
      </Text>
    </View>
  );
};

const ImageGallery = ({ height, width, uri }) => {
  return (
    <View style={{ alignItems: 'center', margin: 15 }}>
      <FastImage
        style={{
          width: width * 0.9,
          height: height * 0.34,
 
          borderRadius: 10,
        }}
        source={{ uri }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const ImageSection = () => {
  const { height, width } = useWindowDimensions();

  return (
    <FlatList
      data={gallerydata}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={<Header />}
      renderItem={({ item }) => (
        <ImageGallery
          height={height}
          width={width}
          uri={item.images}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,

  },

  headerText: {
    paddingBottom:15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    borderRadius:13,
    borderBottomWidth: 7,
    borderBottomColor: 'orange',
    
  },

  galleryText: {
    color: 'orange',
    borderBottomWidth: 3,
    borderBottomColor: 'orange',
    borderRadius: 4,
  },
});

export default ImageSection;