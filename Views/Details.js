import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Details({navigation,route}) {

    const {producto}=route.params;
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
     
        <Image 
        source={{uri:producto.image}}
        style={styles.img}/>
        <Text style={styles.txttitle}>{producto.name}</Text>
        <View style={styles.des}><Text style={styles.txtdes}>{producto.description}</Text></View>
        <View style={styles.price}><Text style={styles.txt}>${producto.price}</Text></View>
        
   
     </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        
      },
      img:{
        width:300, 
        height:200,
        borderRadius:10,
        borderWidth:3,
        borderColor:'black'
      },
      txttitle:{
        fontSize:35,
        margin:15,
        textAlign: 'center',
        color:'#D97904',
        fontWeight:'bold',
      },
      txtdes:{
        fontSize: 20,

      },
      txt:{
        fontSize: 30,
        color:'green',
        margin: 20,
      },
      price:{
        width:windowWidth/2.8,
        height:windowHeight/9,
        backgroundColor: '#F2F2F2',
        elevation:10,
        borderRadius: 15,
        alignItems:'center',
        margin:15
      },
      
      des:{
        width:windowWidth/1.2,
        height:windowHeight/4,
        backgroundColor: '#F2F2F2',
        elevation:10,
        borderRadius: 15,
        alignItems:'center'
      }
});
