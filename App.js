import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';

const DATA = [
  {
    nome: 'Cristo Redentor',
    país: 'Brasil',
    bandeira: '🇧🇷',
    coordenadas: { latitude: -22.9519, longitude: -43.1658 },
  },
  {
    nome: 'Machu Picchu',
    país: 'Peru',
    bandeira: '🇵🇪',
    coordenadas: { latitude: -13.1631, longitude: -72.5450 },
  },
  {
    nome: 'Chichén Itzá',
    país: 'México',
    bandeira: '🇲🇽',
    coordenadas: { latitude: 20.6830, longitude: -88.5713 },
  },
  {
    nome: 'Coliseu',
    país: 'Itália',
    bandeira: '🇮🇹',
    coordenadas: { latitude: 41.8902, longitude: 12.4922 },
  },
  {
    nome: 'Ruínas de Petra',
    país: 'Jordânia',
    bandeira: '🇯🇴',
    coordenadas: { latitude: 30.3285, longitude: 35.4428 },
  },
  {
    nome: 'Taj Mahal',
    país: 'Índia',
    bandeira: '🇮🇳',
    coordenadas: { latitude: 27.1750, longitude: 78.0422 },
  },
  {
    nome: 'Grande Muralha da China',
    país: 'China',
    bandeira: '🇨🇳',
    coordenadas: { latitude: 40.4319, longitude: 116.5704 },
  },
];

const App = () => {
  const [regiao, setRegiao] = useState({
    latitude: -14.2350,
    longitude: -51.9253,
    latitudeDelta: 80,
    longitudeDelta: 80,
  });

  const atualizarRegiao = (coordenadas) => {
    setRegiao({ ...regiao, ...coordenadas });
  };

  const renderizarBotao = ({ item }) => (
    <Button
      title={`${item.bandeira} ${item.nome}`}
      buttonStyle={styles.button}
      titleStyle={styles.textButton}
      onPress={() => atualizarRegiao(item.coordenadas)}
    />
  );

  const renderizarMarcador = (data, index) => (
    <Marker
      key={index}
      coordinate={data.coordenadas}
      title={data.nome}
      description={data.país}
    />
  );

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={regiao}>
        {DATA.map(renderizarMarcador)}
      </MapView>

      <View style={styles.buttonContainer}>
        <FlatList
          data={DATA}
          renderItem={renderizarBotao}
          keyExtractor={(item) => item.nome}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 50,
  },
  button: {
    margin: 10,
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
  },
});

export default App;
