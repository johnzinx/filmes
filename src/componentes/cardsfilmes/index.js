import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./style";


export default function Filmes() {
    return (
        <>
            <TouchableOpacity style={styles.containerFilmes}>

                <Image style={styles.images} source={require(`../../../assets/gentegrande.jpg`)} />
                <Text style={styles.titulo}>Gente Grande</Text>

                <Text style={styles.textNota}>10</Text>
                
                <Image style={styles.images} source={require(`../../../assets/velozes.jpg`)} />
                <Text style={styles.titulo}>Velozes e Furiosos</Text>

                <Text style={styles.textNota}>9.5</Text>

            </TouchableOpacity>

        </>

    )
}

