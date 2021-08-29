import React,{useState} from 'react';
import {Text, View, StyleSheet,Button,ScrollView,TouchableOpacity,FlatList,ImageBackground,TextInput,TouchableHighlight, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Pilha=createStackNavigator();

const lembretes=[
    {
        id:'001',
        desc:['Terça','14:00']
    },
    {
       id:'00',
       desc:['Quarta','16:00']
    },
    {
       id:'003',
       desc:['Quinta','19:00']
    },
]

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
          <Text style={styles.textoTelaLogin}>Email</Text>
          <TextInput style={styles.caixaTexto}>
             
          </TextInput>
          <Text style={styles.textoTelaLogin}>Senha</Text>
          <TextInput style={styles.caixaTexto}>
             
          </TextInput>
          <TouchableOpacity style={styles.botao2} onPress={()=>navigation.navigate('Meu Aluno')}>
             <Text style={styles.botaoEntrar} > Entrar </Text>
          </TouchableOpacity>
             
          
    </View>
  );
}
  function TelaMeuAluno({navigation}){
    return(
      <View>
        <ScrollView>
          <View style={styles.container2}>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Lembretes')}>
                  <Text style={styles.textoMeuAluno}>Mural de lembretes</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('HorarioAulas')}>
                  <Text style={styles.textoMeuAluno}>Horários de Aulas</Text>
              </TouchableHighlight>    
          </View>

          <View style={styles.container2}>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Atividades')}>
                  <Text style={styles.textoMeuAluno}>Atividades</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Relatorio Academico')}>
                  <Text style={styles.textoMeuAluno}>Relatório Academico</Text>
              </TouchableHighlight>    
          </View>

          <View style={styles.container2}>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Horarios Monitoria')}>
                  <Text style={styles.textoMeuAluno}>Horários de Monitoria</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Biblioteca')}>
                  <Text style={styles.textoMeuAluno}>Biblioteca Virtual</Text>
              </TouchableHighlight>    
          </View>

          <View style={styles.container2}>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Pessoas cursinho')}>
                  <Text style={styles.textoMeuAluno}>Pessoas do Cursinho</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Feedback')}>
                  <Text style={styles.textoMeuAluno}>Enviar Feedback</Text>
              </TouchableHighlight>    
          </View>

          <View style={styles.container2}>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Marcar Monitorias')}>
                  <Text style={styles.textoMeuAluno}>Marcar Monitorias</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.botaoMeuAluno} onPress={()=>navigation.navigate('Editar Perfil')}>
                  <Text style={styles.textoMeuAluno}>Editar Perfil</Text>
              </TouchableHighlight>    
          </View>
        
        </ScrollView>
      
    
      </View>
    );
  }
    function TelaLembretes({navigation}){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.tela}>Mural</Text>
              <FlatList
                     data={lembretes}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=><View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}

              />
                 
              
        </View>
      );
}
      function TelaHorarioAulas({navigation}){
        return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.tela}>Horário de Aulas</Text>
                <FlatList
                       data={lembretes}
                       keyExtractor={item=>item.id}
                       renderItem={({item})=><View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}
  
                />
                   
                
          </View>
        );
}
function TelaAtividades({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Atividades</Text>
          
             
          
    </View>
  );
}
function TelaRelatorioAcademico({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Relatório Academico</Text>
          
             
          
    </View>
  );
}
function TelaHorariosMonitoria({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Horarios de Monitoria</Text>
          
             
          
    </View>
  );
}
function TelaBiblioteca({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Biblioteca</Text>
          
             
          
    </View>
  );
}
function TelaPessoasCursinho({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Pessoas do Cursinho</Text>
          
          
          
    </View>
  );
}
function TelaFeedback({navigation}){
      const [texto,setTexto]=useState("Deixe seu comentário")
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          
          <TextInput
             style={styles.caixaTextoFeedback}
              multiline= {true}
              placeholder='Deixe seu comentário'
              onChangeText={text=>setTexto(text)}
          />
          <TouchableHighlight style={styles.botaoEnviar} onPress={()=>Alert.alert('Feedback enviado com suceso')}>
                  <Text>Enviar feedback</Text>
          </TouchableHighlight>
          
          
          
    </View>
  );
}
function TelaMarcarMonitorias({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Marcar Monitorias</Text>
          
          
          
    </View>
  );
}
function TelaEditarPerfil({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.tela}>Editar Perfil</Text>
          
          
          
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
             <Pilha.Screen
                name='Meu Aluno'
                component={TelaMeuAluno}
                options={{title:'Meu Aluno'}}
             />
             <Pilha.Screen
                name='Lembretes'
                component={TelaLembretes}
                options={{title:'Lembretes'}}
             />
             <Pilha.Screen
                name='HorarioAulas'
                component={TelaHorarioAulas}
                options={{title:'HorarioAulas'}}
             />
             <Pilha.Screen
                name='Atividades'
                component={TelaAtividades}
                options={{title:'Atividades'}}
             />
             <Pilha.Screen
                name='Relatorio Academico'
                component={TelaRelatorioAcademico}
                options={{title:'Relatorio Academico'}}
             />
           <Pilha.Screen
                name='Horarios Monitoria'
                component={TelaHorariosMonitoria}
                options={{title:'Horarios Monitoria'}}
             />
             <Pilha.Screen
                name='Biblioteca'
                component={TelaBiblioteca}
                options={{title:'Biblioteca'}}
             />
             <Pilha.Screen
                name='Pessoas cursinho'
                component={TelaPessoasCursinho}
                options={{title:'Pessoas cursinho'}}
             />
             <Pilha.Screen
                name='Feedback'
                component={TelaFeedback}
                options={{title:'Feedback'}}
             />
             <Pilha.Screen
                name='Marcar Monitorias'
                component={TelaMarcarMonitorias}
                options={{title:'Marcar Monitorias'}}
             />
             <Pilha.Screen
                name='Editar Perfil'
                component={TelaEditarPerfil}
                options={{title:'Editar Perfil'}}
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
    marginTop: 25,
    backgroundColor: '#6495ed',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    
    
  },
  botaoEntrar:{
    fontSize: 15,
    color: '#FFF',
  },
  textoTelaLogin:{
    fontSize: 20,
    color: '#000000',
    marginTop: 15
  },
  caixaTexto:{
    borderWidth:1,
    borderColor:'gray',
    width: '60%',
    marginEnd: 15
  },
  container2:{
     flexDirection:'row',
     justifyContent:'space-between' 
  },
  botaoMeuAluno:{
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#6495ed',
    padding: 40,
    borderRadius: 5,
    width: '40%',
    
  },
  textoMeuAluno:{
    fontSize: 15,
    color: '#FFF',
  },
  item:{
    margin:10,
  },
  tela:{
    margin: 20,
    fontSize: 30,
  },
  caixaTextoFeedback:{
    height: '50%',
    padding: 10,
    borderColor:'gray',
    width: '80%',
    borderWidth:2,

  },
  botaoEnviar:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ed',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '50%',
  },
  textoEnviar:
  {
    fontSize: 15,
  },
});