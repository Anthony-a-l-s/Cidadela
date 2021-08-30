import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, FlatList, ImageBackground, TextInput, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from './src/context/AuthContext';
import api from './src/api/api';

const Pilha = createStackNavigator();

const lembretes = [
  {
    id: '001',
    desc: ['Terça', '14:00']
  },
  {
    id: '00',
    desc: ['Quarta', '16:00']
  },
  {
    id: '003',
    desc: ['Quinta', '19:00']
  },
]

function TelaInicial({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={require('./Imagens/Capa.jpg')}
        style={styles.logo}
      >
        <View style={styles.container}>
          <Text style={styles.titulo}> Cidadela </Text>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.botaoTexto} > Entrar </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.entrar}>Entrar</Text>
      <Text style={styles.textoTelaLogin}>Email</Text>
      <TextInput style={styles.caixaTexto}
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}>
      </TextInput>

      <Text style={styles.textoTelaLogin}>Senha</Text>
      <TextInput style={styles.caixaTexto}
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}>
      </TextInput>
      <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Menu Aluno')}>
        <Text style={styles.botaoEntrar} > Entrar </Text>
      </TouchableOpacity>


    </View>
  );
}
function TelaMenuAluno({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container2}>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Lembretes')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='news' size={40} />
              <Text style={styles.textoMenuAluno}>Mural de lembretes</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('HorarioAulas')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='calendar' size={40} />
              <Text style={styles.textoMenuAluno}>Horários de Aulas</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.container2}>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Atividades')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='open-book' size={40} />
              <Text style={styles.textoMenuAluno}>Atividades</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Relatorio Academico')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='bar-graph' size={40} />
              <Text style={styles.textoMenuAluno}>Relatório Academico</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.container2}>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Horarios Monitoria')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='calendar' size={40} />
              <Text style={styles.textoMenuAluno}>Horários de Monitoria</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Biblioteca')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='book' size={40} />
              <Text style={styles.textoMenuAluno}>Biblioteca Virtual</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.container2}>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Pessoas cursinho')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='users' size={40} />
              <Text style={styles.textoMenuAluno}>Pessoas do Cursinho</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Feedback')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='chat' size={40} />
              <Text style={styles.textoMenuAluno}>Enviar Feedback</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.container2}>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Marcar Monitorias')}>
            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='calendar' size={40} />
              <Text style={styles.textoMenuAluno}>Marcar Monitorias</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botaoMenuAluno} onPress={() => navigation.navigate('Editar Perfil')}>

            <View style={styles.containerIcon}>
              <Icon style={styles.icon} name='edit' size={40} />
              <Text style={styles.textoMenuAluno}>Editar Perfil</Text>
            </View>
          </TouchableHighlight>
        </View>

      </ScrollView>

    </View>
  );
}
function TelaLembretes({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Mural</Text>
      <FlatList
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}

      />


    </View>
  );
}
function TelaHorarioAulas({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Horário de Aulas</Text>
      <FlatList
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}

      />


    </View>
  );
}
function TelaAtividades({ navigation }) {
  const [ativs, setAtivs] = React.useState([]);

  /*React.useEffect(() => {
    api.get("/atividades").then((response) => {
      setAtivs(response.data);
    });
  }, []);*/
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Atividades</Text>
      <FlatList
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}

      />


    </View>
  );
}
function TelaRelatorioAcademico({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Relatório Academico</Text>



    </View>
  );
}
function TelaHorariosMonitoria({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Horarios de Monitoria</Text>
      <FlatList
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}

      />


    </View>
  );
}
function TelaBiblioteca({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Biblioteca</Text>



    </View>
  );
}
function TelaPessoasCursinho({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Pessoas do Cursinho</Text>
      <FlatList
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View><Text style={styles.item}>{item.desc[0]} - {item.desc[1]}</Text></View>}

      />


    </View>
  );
}
function TelaFeedback({ navigation }) {
  const [texto, setTexto] = useState("Deixe seu comentário")
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TextInput
        style={styles.caixaTextoFeedback}
        multiline={true}
        placeholder='Deixe seu comentário'
        onChangeText={text => setTexto(text)}
      />
      <TouchableHighlight style={styles.botaoEnviar} onPress={() => Alert.alert('Feedback enviado com suceso')}>
        <Text>Enviar feedback</Text>
      </TouchableHighlight>



    </View>
  );
}
function TelaMarcarMonitorias({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Marcar Monitorias</Text>



    </View>
  );
}
function TelaEditarPerfil({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tela}>Editar Perfil</Text>



    </View>
  );
}

const App = () => {
  return (
    
    //<AuthProvider>
      <NavigationContainer>
        <Pilha.Navigator>
          <Pilha.Screen
            name='Início'
            component={TelaInicial}
            options={{ title: 'Tela Inicial' }}
          />
          <Pilha.Screen
            name='Login'
            component={TelaLogin}
            options={{ title: 'Login' }}
          />
          <Pilha.Screen
            name='Menu Aluno'
            component={TelaMenuAluno}
            options={{ title: 'Menu Aluno' }}
          />
          <Pilha.Screen
            name='Lembretes'
            component={TelaLembretes}
            options={{ title: 'Lembretes' }}
          />
          <Pilha.Screen
            name='HorarioAulas'
            component={TelaHorarioAulas}
            options={{ title: 'HorarioAulas' }}
          />
          <Pilha.Screen
            name='Atividades'
            component={TelaAtividades}
            options={{ title: 'Atividades' }}
          />
          <Pilha.Screen
            name='Relatorio Academico'
            component={TelaRelatorioAcademico}
            options={{ title: 'Relatorio Academico' }}
          />
          <Pilha.Screen
            name='Horarios Monitoria'
            component={TelaHorariosMonitoria}
            options={{ title: 'Horarios Monitoria' }}
          />
          <Pilha.Screen
            name='Biblioteca'
            component={TelaBiblioteca}
            options={{ title: 'Biblioteca' }}
          />
          <Pilha.Screen
            name='Pessoas cursinho'
            component={TelaPessoasCursinho}
            options={{ title: 'Pessoas cursinho' }}
          />
          <Pilha.Screen
            name='Feedback'
            component={TelaFeedback}
            options={{ title: 'Feedback' }}
          />
          <Pilha.Screen
            name='Marcar Monitorias'
            component={TelaMarcarMonitorias}
            options={{ title: 'Marcar Monitorias' }}
          />
          <Pilha.Screen
            name='Editar Perfil'
            component={TelaEditarPerfil}
            options={{ title: 'Editar Perfil' }}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    //</AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  icon: {
    color: '#FFF',
    margin: 10,

  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 20,
    width: '80%',
  },

  botaoTexto: {
    fontSize: 15,
  },
  titulo: {

    fontSize: 30,
    color: '#FFF',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  entrar: {
    fontSize: 30,
    color: '#000000'
  },
  botao2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#6495ed',
    padding: 10,
    borderRadius: 20,
    width: '80%',


  },
  botaoEntrar: {
    fontSize: 15,
    color: '#FFF',
  },
  textoTelaLogin: {
    fontSize: 20,
    color: '#000000',
    marginTop: 15
  },
  caixaTexto: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '60%',
    marginEnd: 15
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botaoMenuAluno: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#6495ed',
    padding: 40,
    borderRadius: 5,
    width: '40%',

  },
  textoMenuAluno: {
    fontSize: 15,
    color: '#FFF',
  },
  item: {
    margin: 10,
  },
  tela: {
    margin: 20,
    fontSize: 30,
  },
  caixaTextoFeedback: {
    height: '50%',
    padding: 10,
    borderColor: 'gray',
    width: '80%',
    borderWidth: 2,

  },
  botaoEnviar: {
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