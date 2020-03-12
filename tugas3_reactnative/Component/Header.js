import React,{Component} from "react"
import {Text,View,StyleSheet} from "react-native";

class Header extends Component{
  render(){
    return(
      <View>
        <Text style={styles.header1}>Tugas 3 React Native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header1:{
    backgroundColor:'#98b541',
    fontSize:15,
    textAlign:'center',
    paddingTop:20,
    color:'white'
  }
})


export default Header;
