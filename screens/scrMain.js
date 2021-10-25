import React, { useCallback } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Linking, } from 'react-native';

const url = "https://github.com/D7alth/Mask_Dector";
const OpenURLButton = ({url, children}) =>{
    const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {  
        await Linking.openURL(url); 
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return <TouchableOpacity style={styles.button} title={children} onPress={handlePress}><Text>GitHub</Text></TouchableOpacity>;
}


export default function scrMain({navigation}){

 
    function start(){
        navigation.navigate("Cam")
    }


    return(
        <View style={styles.container}>
            <View></View>
            <View style={styles.title}>
            <Image style={{width:60, height:30, marginLeft:-15}}source={require('../assets/maskVector.png')}/>
            <Text style={{color:'#FFFFFF', fontSize:30}}>MASK DECTOR</Text>
            </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainerTop}>
                      
                        <OpenURLButton url={url} style={styles.button}>GitHub</OpenURLButton>
                     
                    </View>
                    <View style={styles.buttonContainerBot}>
                        <TouchableOpacity style={styles.buttonBot} onPress={start}>
                            <Text>START</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
        backgroundColor:'#451531',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'space-between',
    },buttonsContainer:{
       width:'100%',
       
    },
    title : {
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
    },
    button:{
        width:'100%',
        marginBottom:10,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius:2,
    },
    buttonContainerTop : {
        display: "flex",
        flexDirection: 'row',  
        justifyContent:'space-between'   
    }, buttonContainerBot : {  
        backgroundColor:"#FF3877",
    
    
    }, buttonBot:{
        alignItems: "center",
        backgroundColor: "#FF3877",
        padding: 20
    }

})