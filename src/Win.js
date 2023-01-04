import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useEffect,useRef} from 'react';  
 import LottieView from 'lottie-react-native';
const Win = (props) => {
   const animationRef = useRef(null);
  useEffect(()=>{
   animationRef.current?.play();
 },[])

  return (
    <View style={myStyles.container}>
        
      <View style= {myStyles.containerBar}>
      <View style = {{width:'84%',justifyContent:'flex-start'}}>
         </View>
       <View style={{width:'30%',height:'100%',justifyContent:'center',}}>
        <Image style={myStyles.imageBb} source={require('../assets/logo.png')}/>
        </View>      
     </View>
        <View style={{width:'100%',height:'40%',alignItems:'center',flex:1, justifyContent: "center",}}>
          <LottieView 
          autoPlay 
          ref={animationRef}
          style={{width:20,height:100}}
          source={require('../assets/fireworks.json')}
          
          />
            <Text style={{color:'#007200',fontSize:60,fontWeight:'900'}}>GREAT JOB</Text>
            <Text style={{fontSize:20}}>You answered all</Text>
            <Text style={{fontSize:20}}>the question correctly</Text>
         <Image source={require('../assets/success.png')} resizeMode="cover"/>
        </View>
        <View style = {{width:'100%',height:'10%',alignItems:'center'}}>
        <TouchableOpacity style={myStyles.btn} onPress={()=>props.navigation.navigate('Home')}>
            <Text style={{color:'#007200',fontSize:20,}}>Start Again</Text>
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
    backgroundColor:'#007200',
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

export default Win