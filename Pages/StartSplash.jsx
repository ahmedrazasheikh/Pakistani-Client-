/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable, 
  useColorScheme,
  View,
  Button,
  TouchableOpacity, 
  Alert
} from 'react-native';


import { useState } from 'react';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function SplashScreen({navigation}) {


  
console.log('Working Properly!!');
const [plus,setPlus] = useState(true)
const [changeHandler,setChangeHandler ] = useState("none")

const ahmedFunc = ()=>{
  setPlus(!plus)
 if (changeHandler === "none") {
  setChangeHandler("flex")
} 
 else if (changeHandler === "flex") {
  setChangeHandler("none")
} 





}

const Transfer = ()=>{
  navigation.navigate('homepage')

  console.log('Ahmed Raza ');
  setPlus(!plus)
 if (changeHandler === "none") {
  setChangeHandler("flex")
} 
 else if (changeHandler === "flex") {
  setChangeHandler("none")
} 
}




  return (
     <View style={styles.container}>










<View       style={[styles.secondBalls1, {display : changeHandler}]}     >

<TouchableOpacity       onPress={Transfer}          activeOpacity={1}   >
      <View   
    style={styles.ball2} >
<Text     style={styles.plusIcon2}         >2</Text>
<Text     style={styles.plusIcon2}         >Branch </Text>
        </View>

</TouchableOpacity>
</View>

<View    style={[styles.secondBalls2, {display : changeHandler}]}      >


<TouchableOpacity       onPress={Transfer} activeOpacity={1}     >
      <View   
    style={styles.ball23} >
<Text     style={styles.plusIcon2}         >1</Text>
<Text     style={styles.plusIcon2}         >Branch </Text>
        </View>
        </TouchableOpacity>
<TouchableOpacity      onPress={Transfer}    activeOpacity={1}       >
      <View   
    style={styles.ball23} >
<Text     style={styles.plusIcon2}         >3</Text>
<Text     style={styles.plusIcon2}         >Branch </Text>
        </View>
        </TouchableOpacity>

</View>

<View       style={styles.secondBalls3} >



<TouchableOpacity            activeOpacity={1}
    onPress={ahmedFunc}      >
      
<View   
    style={styles.ball} >
<Text     style={styles.plusIcon}         > {plus ? "+" : "x"}</Text>
        </View>
   
        </TouchableOpacity>


</View>











     





    </View>
  
  );
}

const styles = StyleSheet.create({










  mainPart:{
flex :1 , 
alignItems : "center",
justifyContent : "flex-start" , 
    backgroundColor : "red", 
  }, 
button:{
  backgroundColor : "red"
},


container: {
  flex: 1,
justifyContent : "center"
},
FirstBall:{
backgroundColor :"red", 
justifyContent : "center",
flexDirection :"column",    
alignItems : "center", 
}, 
secondBalls1:{
justifyContent : "center",   
alignItems : "center", 
flexDirection : "row" , 
// display :{changeHandler}

},
secondBalls2:{
justifyContent : "center",   
alignItems : "center", 
flexDirection : "row" , 
marginBottom : 70, 

// marginTop : 20, 
},
secondBalls3:{
justifyContent : "center",   
alignItems : "center", 
flexDirection : "row" , 
},


  plusIcon2 : {
fontSize: 20, 
color : "white"
  }, 


  ball2:{
    width: 100,
    height: 100,
    //  flex: 1,
    // alignItems : "center",
    alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
  },
  
  ball23:{
    width: 100,
    marginLeft :46 , 
    marginRight :46 , 
    height: 100,
    //  flex: 1,
    // alignItems : "center",
    alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
  }, 
  plusIcon:{
    fontSize: 24, 
    color : "white", 
    marginRight : 5, 
      }, 

  ball: {
    width: 100,
    height: 100,
    //  flex: 1,
       alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
  },

});

export default SplashScreen;