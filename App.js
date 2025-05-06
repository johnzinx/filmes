import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Rotas from './src/componentes/rotas'


export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

  return (

    <View style={styles.container}>

     

      <Rotas />

     


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