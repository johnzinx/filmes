import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./style";


export default function Filmes() {
    return (
        <>
            <TouchableOpacity style={styles.containerFilmes}>

                <Image style={styles.images} source={{uri:(imagem)}} />
                <Text style={styles.titulo}>{titulo}</Text>

                <Text style={styles.textNota}>{nota}</Text>
                


            </TouchableOpacity>

        </>

    )
}

