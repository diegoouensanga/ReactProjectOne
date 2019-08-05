import React from 'react'
import { StyleSheet, View, Button, TextInput} from 'react-native'

class Home extends React.Component{  // La classe Home devient un component

    render(){  // Methode qui retourne un element graphique (obligatoire)

        return(

            <View style = {{marginTop:40}}>
                <TextInput style ={styles.textinput} placeholder ="Athlète, Figure, Move, Compétition..."/>
                <Button style={{height:50}} title = "Search" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput:{
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,
        paddingLeft:5
    }
})

export default Home