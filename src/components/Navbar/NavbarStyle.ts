import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor : '#ff8635',
        height:65

        // padding:10,
    },
    box:{
        // paddingLeft:10,
        padding:10
             
    },
    cornerLogo:{
        width:50,
        height:50
    },
    middleContainer:{
    flex:1,
    alignItems:'center',
    },

    middleLogo:{
    width:'100%',
    height:50,
    resizeMode:'contain'
    }

})

export default styles;