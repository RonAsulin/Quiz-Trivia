import { View, Text ,StyleSheet,TouchableOpacity,FlatList,Image,} from 'react-native'
import React, {useEffect, useState} from 'react'
import ViewTrivia from '../components/ViewTrivia'
import Timer from '../components/Timer';


const Trivia = (props) => {

  const [currentIndex,setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("")
  const [results,setResults] = useState([]);//for api
  const [score,setScore] = useState (0);
  const [movedOn, setMovedOn] = useState(false)
  const myQuestion = async () =>{
    const api =`https://opentdb.com/api.php?amount=20&category=18`;
    const res = await fetch(api, {
      method:'get'
    });
    const data = await res.json();

    setResults(data.results);
  }
    useEffect(()=>{
      myQuestion();
     
    },[]);
    useEffect(() => {

      setAnswer("")
      setMovedOn(false)

    },[currentIndex])
    var answers;
     if(results.length != 0  && currentIndex < 20){
     answers = results[currentIndex].incorrect_answers.concat(results[currentIndex].correct_answer)//מכניס למערך את השאלות
     //console.log(answers)
     }
  return (
    <View style ={myStyles.container}>
      <View style= {myStyles.containerBar}>
      <View style = {{width:'84%',justifyContent:'flex-start'}}>
        <Text style ={{fontSize:30,fontWeight:'bold',color:'#ffff',marginTop:20}}>Question:{' ' + currentIndex + '/' + results.length}</Text>
         </View>
       <View style={{width:'30%',height:'100%',justifyContent:'center',}}>
        <Image style={myStyles.imageBb} source={require('../assets/logo.png')}/>
        </View>      
     </View>
      <View>
        {
          results.length != 0 && currentIndex < 20 ? 
          <ViewTrivia// התחלתי לעשות גטים וסטים לקומפוננטות
        currentIndexGetter={currentIndex}
        currentIndexSetter={setCurrentIndex}
        questions={results}
        answers={answers}
        answerGetter={answer}
        answerSetter={setAnswer}
        scoreGetter={score}
        scoreSetter={setScore}
        movedOnGetter={movedOn}
        movedOnSetter={setMovedOn}      
        />
        
        : currentIndex == 20 && score > 10 ? 
          <View>  
            {props.navigation.navigate('Win')}
          </View> :
           currentIndex == 20 && score < 10 ?
          <View> 
            {props.navigation.navigate('Failed')}
          </View> 
          :
          <Text>loading...</Text>        
        } 
      </View> 
      <Timer 
        currentIndexGetter={currentIndex}
        currentIndexSetter={setCurrentIndex}
        movedOnGetter={movedOn}
        movedOnSetter={setMovedOn}/> 
        

    </View>
    
  )
}

export default Trivia
const myStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#edf2f4',
  },
    containerBar:{
    width:'100%',
    flexDirection:'row',
    height:'12%',
    backgroundColor:'#457B9D',
    alignItems:'center',
   
  },
  imageBb:{
    width:'45%',
    height:'70%',
    
  },

})