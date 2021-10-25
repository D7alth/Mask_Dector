import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Camera } from 'expo-camera'; 


export default function scrMain({navigation}){

    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return(
        <View style={styles.container}>
            <View style={styles.title}>
            <Image style={{width:60, height:30, marginLeft:-15}}source={require('../assets/maskVector.png')}/>
            <Text style={{color:'#FFFFFF', fontSize:30}}>MASK DECTOR</Text>
            </View>
            <View>
            <View style={styles.container1}>
      <Camera style={{width : 300, height :450}} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{width : 300, height :450}}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
           
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
                
            </View>
                <View style={styles.buttonsContainer}>
                    <View>
                        <Text style={styles.buttonBot}>OKAY</Text>
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
     buttonBot:{
        alignItems: "center",
        textAlign: 'center',
        backgroundColor: "#FF3877",
        padding: 20,
        width:'100%',
    }

})