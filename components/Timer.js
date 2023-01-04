import { View, Text ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
const Timer = (props) => {
  const [seconds, setSeconds] = useState( 30)
  let timer;
   useEffect(() => {

    if(props.currentIndexGetter < 20){
      timer = setInterval(() => {
        console.log(seconds);
        setSeconds(seconds-1)
        if(seconds == 0){ 
          clearInterval(timer);
        }
        
    }, 1000)

    if(seconds == 0){
      clearInterval(timer)
      props.currentIndexSetter(props.currentIndexGetter+1);
      setSeconds(30)
    }
    else if(seconds != 0 && props.movedOnGetter){
      clearInterval(timer)
      setSeconds(30)
    }
    }      
    return () => clearInterval(timer)
   })
  return (
    <View style={{alignItems:'center'}}>
    <View style={myStyles.timerstyle}
      >
        <Text style={{alignItems: 'center',color: '#42B4EC', fontSize: 30}}>{seconds}</Text>
      </View>
      </View>
  )
}
const myStyles = StyleSheet.create({
  timerstyle:{
  backgroundColor: '#dad7cd',
    borderWidth: 3,
    borderColor:'#457B9D',
    height: 100,
    width: 100, 
    paddingLeft: 10, 
    paddingRight: 10, 
    borderRadius: 100, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})
export default Timer