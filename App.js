import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";

import images from "./utils";
export default function App() {
  const [pokemon, setPokemon] = useState("");
  const [evolutions, setEvolutions] = useState([]);
  const initials = [0, 3, 6, 9, 12, 15, 18, 21, 24];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Selecione seu inicial!</Text>
      <View style={{ height: 150 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.imageContainer}>
            {initials.map((initial) => (
              <Pressable
                onPress={() => {
                  setPokemon(images[initial].name);
                  setEvolutions([initial + 1, initial + 2]);
                }}
                key={Math.random()}
              >
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 20,
                  }}
                >
                  <Image
                    key={Math.random()}
                    style={styles.image}
                    source={images[initial].image}
                  />
                  <Text key={Math.random()} style={styles.titulo}>
                    {images[initial].name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      {pokemon ? (
        <View style={{ marginTop: 100 }} key={Math.random()}>
          <Text style={styles.titulo}>Você escolheu o {pokemon}</Text>

          <View style={styles.imageContainer}>
            {evolutions.map((evolution) => (
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 20,
                }}
                key={Math.random()}
              >
                <Image
                  key={Math.random()}
                  style={styles.image}
                  source={images[evolution].image}
                />
                <Text key={Math.random()} style={styles.titulo}>
                  {images[evolution].name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={{ marginTop: 100 }}>
          <Text style={styles.titulo}>Selecione um inicial</Text>
          <Animatable.Image
            animation="rotate"
            duration={1000}
            source={require("./assets/pokeball.png")}
            style={{
              width: 200,
              height: 200,
              marginBottom: 20,
              marginRight: 20,
            }}
            iterationCount={"infinite"}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 80,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 110,
    // marginLeft: 20,
    // marginRight: 20,
  },
});
