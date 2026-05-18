import { Text, useWindowDimensions, View } from 'react-native'
import React, { Component } from 'react'
import createStyle from './CardStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@react-native-vector-icons/material-icons';

function Card(){
    const {height,width} = useWindowDimensions();
    const styles = createStyle(height,width);
    console.log(height);
    console.log(width);
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.outerContainer}>
           <View style={styles.container}>

                <View style={styles.topbox}>
                    <View style={styles.picbox}></View>
                </View>

                <View style={styles.bottombox}>

                    <Text style={styles.nameText}>
                        Rik Mondal
                    </Text>

                    <Text style={styles.description}>
                        sophomore in nit durgapur
                    </Text>

                </View>

</View>
</View>
        </SafeAreaView>
    )
}
export default Card;