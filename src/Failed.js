import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';  

const Failed = (props) => {
  return (
    <View style={myStyles.container}>
        
      <View style= {myStyles.containerBar}>
      <View style = {{width:'84%',justifyContent:'flex-start'}}>
         </View>
       <View style={{width:'30%',height:'100%',justifyContent:'center',}}>
        <Image style={myStyles.imageBb} source={require('../assets/logo.png')}/>
        </View>      
     </View>

        <View style={{width:'100%',height:'40%',alignItems:'center',flex:1, justifyContent: "center"}}>
            <Text style={{color:'#540B0E',fontSize:60,fontWeight:'900'}}>FAILED</Text>
            <Text style={{fontSize:20}}>You need to answer</Text>
            <Text style={{fontSize:20}}>10 correct answers</Text>
         <Image source={require('../assets/failed.png')} resizeMode="cover"/>
        </View>
        <View style = {{width:'100%',height:'10%',alignItems:'center'}}>
        <TouchableOpacity style={myStyles.btn} onPress={()=>props.navigation.navigate('Home')}>
            <Text style={{color:'#540B0E',fontSize:20,}}>Start Again</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const myStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#edf2f4',
  },
    containerBar:{
    width:'100%',
    flexDirection:'row',
    height:'10%',
    backgroundColor:'#540B0E',
    alignItems:'center',
   
  },
  imageBb:{
    width:'45%',
    height:'70%',
    
  },
        btn:{
        width:'50%',height:'65%',
        alignItems:'center',paddingTop:10,backgroundColor:'#A8DADC',
        borderRadius:15,
      },
})
export default Failed;