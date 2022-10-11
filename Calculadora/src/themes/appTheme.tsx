import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:'flex-end'
    },
    darkBackground:{
        flex:1,
        backgroundColor:'black',
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:15
    },
    smallResult:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    rows:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    button:{
        height:80,
        width:80,
        borderRadius:100,
        backgroundColor:'#9B9B9B',
        justifyContent:'center',
        marginHorizontal:10
    },
    textButton:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'black',
        fontWeight:'bold'
    }
});
