import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useEffect, useRef} from 'react';  

 import LottieView from 'lottie-react-native';

const Home = (props) => {
   const animationRef = useRef(null);
  useEffect(()=>{
   animationRef.current?.play();
 },[])
  return (
    <View style={myStyles.container}>
        <View style={{width:'100%',height:'40%',alignItems:'center',flex:1, justifyContent: "center"}}>
         <Image source={require('../assets/splash_logo.png')} resizeMode="cover"/>
        </View>
        <View style={{alignItems:'center'}}>
        <LottieView 
          autoPlay 
          ref={animationRef}
          style={{width:20,height:100}}
          source={require('../assets/quiz.json')}
          /> 
        </View>
        <View style = {{width:'100%',height:'10%',alignItems:'center'}}>
         <TouchableOpacity style={myStyles.btn} onPress={()=>props.navigation.navigate('Trivia', {index: 0})}>

            <Text style={{color:'#F1FAEE',fontSize:40,}}>Click Me</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
export default Home

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#edf2f4',
        padding:1
      },

        
      btn:{
        width:'80%',height:'70%',
        alignItems:'center',backgroundColor:'#A8DADC',
        borderRadius:15,
      },
})