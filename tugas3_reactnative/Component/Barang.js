import React,{Component} from "react"
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from "react-native";

class Barang extends Component {
  constructor(props){
    super(props);
    this.state ={
      jumlah:0
    }
  }

  handletambah =()=>{
    this.setState({
      jumlah:this.state.jumlah + 1
    });
  }

  handlekurang =()=>{
    this.setState({
      jumlah:this.state.jumlah-1
    });
    if (this.state.jumlah > 0) {
      {this.state.jumlah}
    } else {
      alert("Jumlah Tidak Boleh Kurang Dari 0");
    }
  }
  render(){
    return(
      <View>
        <Text style={styles.header}>{this.props.data}</Text>
        <Text style={{textAlign:'right',fontSize:15}}>Jumlah:   {this.state.jumlah} </Text>
        <Text style={styles.text}>Silahkan Tekan Tombol di Bawah</Text>
        <View style={styles.layout}>
          <TouchableOpacity>
            <Text style={styles.buttonText1}  onPress={this.handletambah}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText2} onPress={this.handlekurang}>-</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.jumlah}>{this.state.jumlah}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#98b541',
    textAlign:'center',
    paddingBottom:20,
    fontSize:30,
    color:'purple'
  },

  buttonText1 : {
    padding: 10,
    backgroundColor:'green',
    color: 'white',
    textAlign:'center',
    width:100,
    justifyContent:'space-between',
    alignItems:'center',


  },
  buttonText2 : {
    padding: 10,
    backgroundColor:'red',
    color:'white',
    textAlign:'center',
    width:100,
    justifyContent:'space-between',
    alignItems:'center',



  },
  jumlah:{
    color:'blue',
    textAlign:'center',
    marginTop:40,
    fontSize:40

  },
  text:{
    fontSize:20,
    textAlign:'center',
    margin:20
  },
  layout:{
    marginLeft: 50,
    marginRight:50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Barang;
