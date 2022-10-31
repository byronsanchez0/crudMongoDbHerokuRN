import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet,TextInput,Button,SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import {useState} from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Add({navigation}) {

    const [id, onChangeId] = useState("");
    const [name, onChangeName] = useState("");
    const [description, onChangedescription] = useState("");
    const [price, onChangeprice] = useState("");
    const [image, onChangeImage] = useState("");
    
    
    
    const validandoid = (idv) => {
      if(idv == ""){
      alert("Campo Id esta vacio")
      }else{
        let con = /^\d/;
        if (con.test(idv)){
        }else{
           alert("Id solamente acepta numeros")
        }
         return (con.test(idv));
    }
    }
    
    
    const validandoname = (namev) => {
      if(namev == ""){
      alert("Campo nombre esta vacio")
      }else{
        let con = /^[a-zA-Z ]{2,254}/;
        if (con.test(namev)){
        }else{
           alert("Nombre solamente acepta letras")
        }
         return (con.test(namev));
    }
    }
    
    const validandodescription = (descriptionv) => {
      if(descriptionv == ""){
      alert("Campodescripcion esta vacio")
      }else{
        let con = /^[a-zA-Z ]{2,254}/;
        if (con.test(descriptionv)){
        }else{
           alert("Descripcion solamente acepta letras")
        }
         return (con.test(descriptionv));
    }
    }
    
    const validandoprice = (pricev) => {
      if(pricev == ""){
      alert("El precio esta vacio")
      }else{
        let con = /^[0-9]+([.]{1})([0-9]+)$/;
        if (con.test(pricev)){
    
        }else{
           alert("Precio solamente acepta numeros y un punto. Formato aceptado: 0.0")
        }
         return (con.test(pricev));
    }
    }
    
    /*const validandourl = (urlv) => {
      if(urlv == ""){
      alert("Imagen esta vacio")
      }else{
        let con = "";
        if (con.test(urlv)){
    
        }else{
           alert("Url incorrecto")
        }
         return (con.test(urlv));
    }
    }*/
    
  
  return (
    <SafeAreaView>
    <View style={styles.viewtext} ></View>     


    <Text style={styles.txt}>Ingrese el id del producto</Text>
     <TextInput 
     style={styles.inputid} 
     placeholder="id"
      keyboardType="numeric"
     onChangeText={onChangeId}
     value={id}/>
     <Text style={styles.txt}>Nombre del producto</Text>
     <TextInput 
     style={styles.input} 
     placeholder="name"
     onChangeText={onChangeName}
     value={name}/>
     <Text style={styles.txt}>Descripcion del producto</Text>
     <TextInput 
     style={styles.inputdes} 
     placeholder="Descripcion"
     onChangeText={onChangedescription}
     value={description}/>
     <Text style={styles.txt}>Precio</Text>
     <TextInput 
     style={styles.input} 
     placeholder="Precio"
      keyboardType="numeric"
     onChangeText={onChangeprice}
     value={price}/>
     <Text style={styles.txt}>Ingrese la url de la imagen del producto</Text>
     <TextInput 
     style={styles.input} 
     placeholder="image"
     onChangeText={onChangeImage}
     value={image}/>

      <TouchableOpacity style={styles.btnadd}
      
       onPress={
         () => {
           if(validandoid(id)){
           if(validandoname(name)){
             
            if(validandodescription(description)){

            if(validandoprice(price))
             
             /*if(validandourl(url)){*/
              
           var url="https://apimongobd-productos.herokuapp.com/api/list";
           fetch(url,{
               method: 'POST',headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
              },
               body: JSON.stringify({
                 id: id,
                 name:name,
                 description:description,
                 price:price,
                 image:image
                 })//fin body
               }).then((res)=>res.json()).then((resJson)=>alert(resJson.message)).then(navigation.navigate("Productos"))

   
           }
         }
                }}     /*}*/
         
         }><Text style={styles.txtbtn}>Agregar</Text></TouchableOpacity>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#D97904',
    borderRadius: 12,
    alignSelf:'center',
    width: windowWidth/1.2
  },
   inputid: {
    width:windowWidth/8,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#D97904',
    borderRadius: 12,
    alignSelf:'center',
    textAlign:'center'
  },
  inputdes: {
    width:windowWidth/1.2,
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#D97904',
    borderRadius: 12,
    alignSelf:'center'
  },
  txt:{
    textAlign:'center',
    fontSize: 15,
    fontWeight:'bold'
  },
  titleadd:{
    fontSize: 20,
    top: '115%',
    fontWeight:'bold',
    marginLeft: '2%'
  }, 
  viewtext:{
    marginBottom: '15%'
  },
  btnadd:{
    backgroundColor:'#D97904',
    width: windowWidth/2,
    height: windowHeight/15,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 3,
    elevation: 12
  },
  txtbtn:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    padding: 5
  }
 
});
