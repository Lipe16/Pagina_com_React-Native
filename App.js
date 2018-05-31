import React, {Component} from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';

import Expo from 'expo'

class App extends Component{


  render(){
    {/* Coloquei muitos estilos diretamente nos componentes pelo fato de este projeto
      ser só uma experiência de como trabalhar com React-native, recomendo fortemente
      a sempre usar a classe de estilos para deixar o código mais clean*/}

   const TextoPrincipal = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';
   const TextoSecundarioUm = 'É um fato conhecido de todos que um leitor se distrairá  com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.';


    return (
      <View style={styles.viewPai}>

          {/* topo com vários cubos em cores diferentes */}
          <View style={ styles.topo}>
            <View style={{flex:1,backgroundColor:'#832a0d'}}>
            </View>

            <View style={{flex:1,backgroundColor:'#f4a460'}}>
            </View>

            <View style={{flex:1,backgroundColor:'#bc8f8f'}}>
            </View>

            <View style={{flex:1,backgroundColor:'#cd853f'}}>
            </View>
          </View>




          {/* Titulo principal */}
          <View style={styles.tituloPrincipal}>
            <Text style={{fontSize:22}}> Revvista Nativva</Text>
          </View>





          {/* Seção principal contendo um texto e uma imagem */}
          <View style={styles.secaoPrincipal}>
            {/* Texto*/}
            <View style={{flex:3}}>
              <Text style={{fontSize:16}}>
                {TextoPrincipal.slice(0,180) + ' ...'}
              </Text>
            </View>
            {/* imagem */}
            <Image style={{flex:2, width:undefined, height:undefined}} source={require('./imagens/imagem01.png')} />
          </View>




          {/* Seção secundária contendo 2 títulos, 2 textos e 2 imagens */}
          <View style={styles.secaoSecundaria}>
                    {/* Título, texto e imagem ¹ */}
                    <View style={{flex:1, borderRightWidth: 6}}>
                      <View style={{flex:1, alignItems: 'center'}}>
                        <Text style={{fontSize:20}}>Title 1</Text>
                      </View>

                      <View style={{flex:6, flexDirection: 'column', padding:8}}>
                          <View style={{flex:1, flexDirection: 'row'}}>
                            <Image style={{flex:1, width:undefined, height:undefined}} source={require('./imagens/imagem02.png')}/>

                            <View style={{flex:1}}>
                              <Text>{TextoSecundarioUm.slice(0,40)}</Text>
                            </View>
                          </View>

                          <View style={{flex:1}}>
                            <Text>{TextoSecundarioUm.slice(40,120) + '...'}</Text>
                          </View>
                      </View>
                    </View>

                    {/* Título, texto e imagem ² */}
                    <View style={{flex:1}}>
                      <View style={{flex:1, alignItems: 'center'}}>
                        <Text style={{fontSize:20}}>Title 2</Text>
                      </View>

                      <View style={{flex:6, flexDirection: 'column', padding:8}}>
                          <View style={{flex:1}}>
                            <Text>{TextoSecundarioUm.slice(0,80)}</Text>
                          </View>

                          <View style={{flex:1, flexDirection: 'row'}}>
                            <Image style={{flex:1, width:undefined, height:undefined}} source={require('./imagens/imagem03.png')}/>

                            <View style={{flex:1}}>
                              <Text>{TextoSecundarioUm.slice(80, 115) + "..."}</Text>
                            </View>
                          </View>
                      </View>
                    </View>
          </View>




          {/* Rodapé*/}
          <View style={styles.rodape}>
            <Text style={{fontSize: 16}}>Copyright (c)2017 Revvista Nativva</Text>
          </View>

      </View>
    );
  }
}

{/* Exemplo de como criar um objeto de estilos semelhante as folhas de estilo css */}
const styles = StyleSheet.create({
  viewPai:{
    flex:1,
    padding:13,
    backgroundColor:'#c19a6b',
    marginTop: Expo.Constants.statusBarHeight,
  },
  topo:{
      flex:1,
      flexDirection:'row',

  },
  tituloPrincipal:{
    flex:1,
    backgroundColor:'#f8ecc2',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6
  },
  secaoPrincipal:{
    flex:6,
    backgroundColor:'#f8ecc2',
    flexDirection:'row',
    padding: 8
  },
  secaoSecundaria:{
    flex:7,
    backgroundColor:'#f8ecc2',
    borderTopWidth:6,
    borderBottomWidth: 6,
    flexDirection:'row'
  },
  rodape:{
    flex:1,
    alignItems:'center',
    padding: 4,
    backgroundColor:'#d3d3d3',
    justifyContent: 'center'
  }

});


export default App;
