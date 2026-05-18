import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  useWindowDimensions,
} from 'react-native';

const EventCard = React.memo(
  ({ category, name, details, photo }) => {

    const { width } = useWindowDimensions();

    return (
      <View style={styles.outerContainer}>
        <View
          style={[
            styles.card,
            {
              width: width * 0.9,
              maxWidth:800
            },
          ]}
        >
          {/* Category */}
          <Text style={styles.category}>
            {category}
          </Text>

          {/* Title */}
          <Text style={styles.title}>
            {name}
          </Text>

          {/* Details */}
          <View style={styles.detailContainer}>
            <Text style={styles.detailText}>
              📅 February 7, 2025
            </Text>

            <Text style={styles.detailText}>
              📍 Mechanical Engineering Seminar Room
            </Text>

            <Text
              style={styles.mail}
              onPress={() => {
                Linking.openURL(
                  'mailto:iic@nitdgp.ac.in'
                );
              }}
            >
              ✉️ iic@nitdgp.ac.in
            </Text>
          </View>

          {/* Image Section */}
          <View style={styles.imageCard}>
            <Image
              source={{ uri: photo }}
              style={styles.image}
              resizeMode="cover"
            />

            <Text style={styles.orgText}>
              National Institute Of Technology,
              Durgapur
            </Text>

            <Text style={styles.eventTitle}>
              {name}
            </Text>

            <Text style={styles.dateText}>
              2026-02-12T18:00 - TBA
            </Text>

            <Text style={styles.description}>
              {name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: 'rgb(255, 203, 169)',
    borderRadius: 16,
    padding: 20,
  },

  category: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    color: 'white',
    fontWeight: '600',
  },

  title: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },

  detailContainer: {
    marginTop: 10,
  },

  detailText: {
    marginTop: 3,
  },

  mail: {
    marginTop: 3,
    color: 'blue',
  },

  imageCard: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
  },

  orgText: {
    marginTop: 12,
    color: 'grey',
    fontWeight: 'bold',
  },

  eventTitle: {
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 20,
  },

  dateText: {
    marginTop: 2,
    color: 'grey',
  },

  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },
});

export default EventCard;