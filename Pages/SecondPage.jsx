
import { StyleSheet, TextInput, Text, View, Dimensions, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { DownOutlined } from '@ant-design/icons';
import Icon from "react-native-vector-icons/AntDesign"
export default function SecondPage({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log("Window Width" + windowWidth);
  console.log("Window height" + windowHeight);
  const Transfer1 = () => {
    navigation.navigate('ReversiblePage')

  }
  const Transfer2 = () => {
    navigation.navigate('ReversiblePageSecond')

  }
  const Transfer3 = () => {
    navigation.navigate('KPLSecond')

  }


  return (
    <View style={styles.container}    >

      {/* First */}
      <View style={[styles.Box1, { width: windowWidth, height: windowHeight / 5 }]}  >

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Search"}
          // value={value}
          />
          <Icon color={"black"} style={styles.icon} name="search1" size={20} />
        </View>




      </View>



      {/* Second */}
      <View style={styles.Box2}          >





        {/* First  */}
        <View style={styles.firstRowofSquare}  >






          <TouchableOpacity onPress={Transfer1} style={styles.square}><Text style={styles.BoxText}    >Details</Text></TouchableOpacity>
          <TouchableOpacity onPress={Transfer2} style={styles.square}><Text style={styles.BoxText}    >Employess</Text></TouchableOpacity>
        </View>

        {/* Second  */}
        <View style={styles.firstRowofSquare} >
          <TouchableOpacity onPress={Transfer3} style={styles.square}><Text style={styles.BoxText}    >Customers</Text></TouchableOpacity>
          <View style={styles.square}><Text style={styles.BoxText}    >Suppliers</Text></View>
        </View>
      </View>


      {/* Third */}
      <View style={[styles.Box3, { width: windowWidth, height: windowHeight / 11 }]}  >




        <View style={styles.InnerDiv34}      >

          <View><Icon name="select1" size={30} color="white" /></View>
          <View><Icon name="message1" size={30} color="white" /></View>
          <View><Icon name="home" size={30} color="white" /></View>
          <View><Icon name="enviromento" size={30} color="white" /></View>
          <View><Icon name="qrcode" size={30} color="white" /></View>



        </View>
      </View>





    </View>
  );
}

const styles = StyleSheet.create({


  inputContainer: {
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  input: {
    height: 80,
    // margin: 20,
    borderWidth: 1,
    padding: 10,
    fontSize: 17,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
  },
  plan: {
    color: "#00308F"
  },

  Box3: {
    justifyContent: "space-evenly",
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    backgroundColor: "#005A9C",
  },
  InnerDiv34: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor : "red", 
    width: "100%"

  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 290,
    backgroundColor: "white",
    borderRadius: 20,
  },
  container: {

    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  BoxText: {
    fontSize: 18,
    color: "white"
  },
  firstRowofSquare: {
    flexDirection: "row",
    marginBottom: 40,

  },

  Box2: {
    marginLeft: 40,
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center"

  },
  Box1: {
    // marginTop :24 , 
    // flex : 1, 


    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    backgroundColor: "#005A9C",
  },
  Box3:{
    justifyContent : "space-evenly",
    paddingLeft : 40 ,
    paddingRight : 40 , 
    alignItems : "center",
    flexDirection  : "row",
    width : "100%",
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
    backgroundColor: "#005A9C",   
  }, 
  square: {
    width: 100,
    marginRight: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    // 
    backgroundColor: "#005A9C",
    borderRadius: 15,
  },






});
