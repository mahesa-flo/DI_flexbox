import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const localImg = require('./images/foto-perfil.png');

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.seccionSuperior}>
            <View>
              <Image
                style={{width: 80, height: 80, borderRadius: 150}}
                source={localImg}
              />
            </View>

            <View style={styles.secDatos}>
              <View style={styles.secLetras}>
                <View>
                  <Text>Posts</Text>
                  <Text>20</Text>
                </View>
                <View style={{paddingLeft: 14}}>
                  <Text>Followers</Text>
                  <Text>110304</Text>
                </View>
                <View style={{paddingLeft: 14}}>
                  <Text>following</Text>
                  <Text>1103</Text>
                </View>
              </View>
              <View>
                <Button title="Edit profile" disabled />
              </View>
            </View>
          </View>
          <View style={styles.seccionFotos}>
            {images.map(imagen => {
              return (
                <View>
                  <Image
                    style={{width: 90, height: 90, margin: 2}}
                    source={{
                      uri: imagen,
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 40,
  },
  seccionSuperior: {
    display: 'flex',
    flex: 0.2,
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    flexDirection: 'row',
    marginTop: 40,
  },
  secFoto: {
    display: 'flex',
  },
  secDatos: {
    display: 'flex',
    flexFlow: '',
  },

  secLetras: {
    display: 'flex',
    flexFlow: 'row wrap',
    paddingBottom: 8,
    flexDirection: 'row',
  },

  seccionFotos: {
    display: 'flex',
    flex: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 15,
  },
});
