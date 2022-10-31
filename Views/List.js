import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView,Button, TouchableOpacity, ScrollView, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {Avatar, ListItem} from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function List({navigation}) {

  const [data, SetData] = useState([]);

  var url ="https://apimongobd-productos.herokuapp.com/api/list"
  fetch(url).then((res)=> res.json()).then((resJson)=>SetData(resJson))
  
  if(data.length>0){
  return (
   <SafeAreaView>
    <ScrollView>
        <View style={styles.container}>
            {
                data.map((producto, i)=>(
                    <ListItem style={{ borderColor:'#D97904', borderWidth: 0.5}} key={i} bottomDivider onPress={()=>navigation.navigate("Detalles",{producto:producto})}>
                        <Avatar width={windowWidth/3}
        height={windowHeight/7} source={{uri: producto.image}}></Avatar>
        <ListItem.Chevron/>
        <ListItem.Content style={{alignItems:'center'}}>
            <ListItem.Title style={{fontSize: 17,marginBottom: 10, textAlign:'center'}}>{producto.name}</ListItem.Title>
            <ListItem.Subtitle style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>${producto.price}</ListItem.Subtitle>
        </ListItem.Content>
                    </ListItem>
                ))
                }
            

        </View>
    </ScrollView>
     <TouchableOpacity style={styles.btnflotan} onPress={()=>{
             navigation.navigate('Agregar')}}><Image
             style={styles.tinyLogo}
             source={require('../assets/add.png')}
           /></TouchableOpacity>
   </SafeAreaView>
  );
} else{
    return(
      <SafeAreaView>
        <View style={styles.container2}>
          <Text style={styles.bottom_text}>En mantenimiento</Text>
          <Button title='Refresh' onPress={()=>{DevSettings.reload();}}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
      },
      container2: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      list:{
        backgroundColor: 'red',
        color: 'red',
        
      },
      btnflotan:{
        position: 'absolute',
        width: windowHeight/12,
        height: windowHeight/12,
        backgroundColor:'#D97904',
        borderRadius: 40,
        bottom: 40,
        right: 15,
        elevation: 10,
        borderColor: '#D97904',
        borderWidth: 3
      },
      tinyLogo:{
        width: windowWidth/12,
        height: windowHeight/23,
        alignSelf:'center',
        top:'20%'
      }
});
