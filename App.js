import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/componentes/cabecalho'
import Pesquisa from './src/componentes/pesquisa';
 
export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);
 
  return (

       <View style= {styles.container}>

            <Cabecalho/>

            <Pesquisa/>
       

      
     
         {/* INICIO DO BANNER */}
        <Text style={styles.textBanner}> Em cartaz </Text>
 
        <Image style={styles.imageBanner} source = {require(`./assets/jurassic.jpg`)}/>
        
        {/* FIM DO BANNER */}
     
   
 
    </View>
 
  );
 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
  imageBanner: {
    width: '90%',
    height: 200,
    marginTop: 15,
    borderRadius: 10
  },
 
  textBanner: {
    fontSize: 30,
    color: 'white',
    marginTop: 15,
    marginLeft: -180,
    fontWeight: 'Bold'
  }
 
});