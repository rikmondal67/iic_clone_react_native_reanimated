import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";


const createStyle = (height:number,width:number)=> { 
    
    return StyleSheet.create({
        outerContainer:{
            flex:1,
            alignItems:'center'
        },
    container:{
        marginTop:50,
        backgroundColor:'#0d0c11',
        height:height*0.45,
        width:width*0.7,
        borderRadius:30,
        overflow:'hidden'
    },
    topbox:{
        height:'55%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dcceff'
    },
    bottombox:{
            paddingTop:'10%',
            flex:0.55,
            justifyContent:'center',
            alignItems:'center'
    },
    picbox:{
        height:height*0.2,
        width:width*0.4,
        borderRadius:20,
        backgroundColor:'white',

    },
    nameText:{
    paddingTop:5,


    color:'white',
    fontSize:24,
    fontWeight:'bold'
    },
    description:{
        color:'white',
        fontSize:20,

    },
    
    icons:{
        paddingTop:4
    }

})}

export default createStyle;