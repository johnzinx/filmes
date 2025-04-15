import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/componentes/cabecalho'
import Pesquisa from './src/componentes/pesquisa';
import Banner from './src/componentes/banner';
import Filmes from './src/componentes/cardsfilmes';
import { FlatList } from 'react-native-web';

export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

  return (

    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Banner />

      <FlatList
        data={Filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <cardfilmes
            titulo={item.nome}
            nota={item.nome}
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