import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function scrStart({navigation}){
    
    

    setTimeout(()=>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          });
    }, 2000)
    return(
        <View style={styles.container}>
            <Text style={{color:'#FFFFFF', fontSize:30}}>2° ANO B</Text>
            <Text style={{color:'#FFFFFF', fontSize:14}}>apresenta</Text>
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
        justifyContent: 'center',
    }
})
