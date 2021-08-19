import React from 'react';
import {Text, View, StyleSheet,Button,Alert,TouchableOpacity,Image, ImageBackground} from 'react-native';

export default function App(){
  return(
        <View> 
        <ImageBackground
          source={require('./Imagens/Capa.jpg')}
          style={styles.logo}
          >
           <View style={styles.container}>
             <Text style={styles.titulo}> Cidadela </Text>
             <TouchableOpacity style={styles.botao}>
             <Text style={styles.botaoTexto} > Entrar </Text>   
             </TouchableOpacity>
          </View>
         </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
  },
  botao:{
    justifyContent: 'center',
    alignItems:'center',
    margin: 15,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    
    
  },
  botaoTexto:{
    fontSize: 15,
  },
  titulo:{
    
    fontSize: 30,
    color: '#FFF',
  },
  logo:{
      width: '100%',
      height:'100%',
      resizeMode:'contain'
  }
  

});