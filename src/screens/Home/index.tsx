import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from './styles';
import React, {useState, useEffect} from "react";
import { Participant } from "../../components/Participant";
export function Home() {
  const [participants, setParticipants]=useState<string[]>([]);
  const [participantName, setParticipantName]=useState("");
  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe!","Já existe uma pessoa com esse nome")
    }
    setParticipants(prevState=>[...prevState, participantName])
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {

    return Alert.alert("Remover", `Remover o participante ${name}?`,[
    {
      text: "Sim",
      onPress:()=>Alert.alert("Deletado!")
    },
    {
      text: "Não",
      style: "cancel"
    }
  ])
    console.log(`removendo ${name}`);



  }
  return (


    <View style={styles.container}>
      <Text
        style={styles.eventName}>
        Olá Wesleson Souza</Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Setembro de 2023
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantName}
          value={participantName}//Usando para fazer limpa o input
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>


      </View>
      < FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}

            />

          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ? Adicione participantes a sua lista de participantes.
            </Text>
          )}
      />


    </View>
  )
}