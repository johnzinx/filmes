import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/componentes/cabecalho'
import Pesquisa from './src/componentes/pesquisa';
import Banner from './src/componentes/banner';
 
export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);
 
  return (

       <View style= {styles.container}>

            <Cabecalho/>

            <Pesquisa/>

            <Banner/>
   
 
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