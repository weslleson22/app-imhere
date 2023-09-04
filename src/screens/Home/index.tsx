import { Text, View, TextInput } from "react-native"
import {styles} from './styles';

export function Home(){
  return(

    <View style={styles.container}>
    <Text
    style={styles.eventName}>
      Olá Wesleson Souza</Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Setembro de 2023
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6B6B6B"}
      />
    </View>
  )
}