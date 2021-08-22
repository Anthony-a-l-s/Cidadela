import React from 'react';
import {Text, View, StyleSheet,Button,Alert,TouchableOpacity,Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Pilha=createStackNavigator();

function TelaInicial({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ImageBackground
            source={require('./Imagens/Capa.jpg')}
            style={styles.logo}
      >
      <View style={styles.container}>
         <Text style={styles.titulo}> Cidadela </Text>
         <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.botaoTexto} > Entrar </Text>
         </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

function TelaLogin({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.entrar}>Entrar</Text>
          <TouchableOpacity style={styles.botao2}>
             <Text style={styles.botaoEntrar} > Entrar </Text>
          </TouchableOpacity>
             
          
    </View>
  );
}

export default function App(){
  return(
        <NavigationContainer>
           <Pilha.Navigator>
             <Pilha.Screen
                name='Início'
                component={TelaInicial}
                options={{title:'Tela Inicial'}}
             />
             <Pilha.Screen
                name='Login'
                component={TelaLogin}
                options={{title:'Login'}}
             />
           </Pilha.Navigator>
        </NavigationContainer>
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
  },
  entrar:{
    fontSize: 30,
    color: '#000000'
  },
  botao2:{
    justifyContent: 'center',
    alignItems:'center',
    margin: 15,
    backgroundColor: '#6495ed',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    
    
  },
  botaoEntrar:{
    fontSize: 15,
    color: '#FFF',
  },
});