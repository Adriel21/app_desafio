import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker';


const Perfil = () => {
    const [image, setImage] = useState(null);


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.5,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

  return (
    <View style={estilos.container}>
      <StatusBar />
      {image && <Image source={{ uri: image }} style={{ width: "50%", height: 200, borderRadius: 200/2,}} onPress={pickImage}/>}
      { !image && <View style={estilos.imagem}>
        <Pressable onPress={pickImage} >
            <Text style={estilos.texto}>Enviar Foto</Text>
        </Pressable>
      </View> }
    </View>
  )
}



export default Perfil

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "center",
        paddingTop: 60,
    },
    imagem: {
        width: "50%",
        backgroundColor: "rgba(0,0,0, 0.7)",
        height: 200,
        borderRadius: 200/2,
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    }
    
})