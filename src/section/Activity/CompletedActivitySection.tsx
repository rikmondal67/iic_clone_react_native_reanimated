import React, { useCallback } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import EventCard from '@/components/EventCard/EventCard'
import { comdata } from './comdata'
import { UndoIcon } from 'lucide-react-native'

const CompletedActivitySection = () => {

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <EventCard
          category={item.category}
          name={item.name}
          details={item.details}
          photo={item.photo}
        />
      </View>
    )
  }, [])

  return (
    <FlatList
      data={[...comdata].reverse()}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    
      removeClippedSubviews={true}
      initialNumToRender={4}
      maxToRenderPerBatch={4}
      windowSize={5}
      
    />
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 15,
  },
})

export default CompletedActivitySection