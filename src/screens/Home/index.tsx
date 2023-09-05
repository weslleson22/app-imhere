import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from './styles';
import { Participant } from "../../components/Participant";
export function Home() {

  const participants = ["wesleson", 'Wer', 'Lucas', "Amanda", "Diego", "Cris", "Ya", "Dell", "Babys", "Ely", "Eng"]
  function handleParticipantAdd() {
    if(participants.includes("wesleson")){
      return Alert.alert("Participante existe!","Já existe uma pessoa com esse nome")
    }
    console.log("Vc está presionando o botão");
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