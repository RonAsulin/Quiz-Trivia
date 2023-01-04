import { View, Text,StyleSheet,TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'


const ViewTrivia = (props) => {


  return (
    <View style={{padding:10}}>
      <View>
        </View>  
     <Text style={myStyles.name}>{props.questions[props.currentIndexGetter].question}</Text>
    <View >
          <FlatList  
          data={props.answers}//מביא את המערך השאלות
          keyExtractor={(item,index) => index }
          renderItem={({item}) => {
            return (
            <View style={myStyles.row_container }>
            <TouchableOpacity 
            onPress={() => {
              if( item == props.questions[props.currentIndexGetter].correct_answer ){                
                props.scoreSetter(props.scoreGetter+1)
              } 
              
              props.currentIndexSetter(props.currentIndexGetter+1)
              props.movedOnSetter(true)
            }}>      
            <Text style={{color:'#00b4d8',fontSize:20}}>{item}</Text>
            </TouchableOpacity>
         </View>   
            )
          }}
          />
        <View>
         
        </View>    
  
  </View>
  </View>
  )
}

export default ViewTrivia

const myStyles = StyleSheet.create({
      name_container:{
        width:'100%',
      },
      row_container:{
        width:'100%',flexDirection:'row',marginBottom:10,
        backgroundColor:'#dad7cd',borderRadius:10,padding:10,paddingEnd:10,paddingStart:10,

      },
      name:{
        color:'#6096ba',fontSize:30,
      },
    
});
