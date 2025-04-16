import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/componentes/cabecalho'
import Pesquisa from './src/componentes/pesquisa';
import Banner from './src/componentes/banner';
import Cardfilmes from './src/componentes/cardsfilmes';
import DATA from './src/componentes/data/movies'


export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

  return (

    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Banner />

      <FlatList


        horizontal={true}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <Cardfilmes

            titulo={item.nome}
            nota={item.nota}
            imagem={item.imagem}

          />



        )}

      />


    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },


});