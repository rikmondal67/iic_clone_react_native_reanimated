import React from 'react'
import { View, Text } from 'react-native'
import styles from './NavbarStyle'
import { Image } from 'react-native'
import { TextAlignJustify  } from 'lucide-react-native'




const Navbar = () => {
  return (
    <View style={styles.container}>

        <View style={styles.box}>
            <Image style={styles.cornerLogo}
                source = {{uri:'https://nitdgp.ac.in/front/assets/images/logo.png'}}
            >

            </Image>
        </View>

        

        <View style={styles.middleContainer}>
            <Image style={styles.middleLogo}
                source = {{uri:'https://www.iicnitdgp.in/assets/iiclogo-Dp9pygXw.png'}}
            >

            </Image>
        </View> 
        
        
        

      <View style={styles.box}>

            <TextAlignJustify  size={28}
            color="white"/>
        </View>

       


    </View>
  )
}

export default Navbar