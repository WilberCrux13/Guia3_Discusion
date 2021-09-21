import {AppRegistry} from 'react-native';
import React, { PureComponent } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import { whileStatement } from '@babel/types';

const DATA = [
{
 id: '1',
 src:require('./src/imgs/pupusas.jpg'),
 title: 'PUPUSAS:Es una tortilla que puede ser a base de maiz o arroz,y se rellena con frijoles,queso y chicharron',
 },
 {
 id: '2',
 src:require('./src/imgs/tamales.jpg'),
 title: 'TAMALES:Es un platillo a base de maiz,hay tanmales de elote,pisques(rellenos de frijol) y tamales de gallina o pollo',
 },
 {
 id: '3',
 src:require('./src/imgs/sopa.jpg'),
 title: 'SOPA DE PATA:Sopa cuyo ingrediente base son las extremidad es de la vaca, a las que se les agregan verduras como plátano, repollo, yuca, pipianes,etc.',
},
 {
 id: '4',
 src:require('./src/imgs/pan.jpg'),
 title: 'PANES CON POLLO:Es un pan de harina en forma alargada que se rellena con lechuga,tomate,pepino,pollo, y salsa de tomate',
 },
 ];
 const Item = ({ title, img}) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 <Image style={styles.img} source={img}/>
 
 
 </View>
 );

 const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} img={item.src} />
 );

 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
 }

 const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#2A546F',
 padding: 100,
 marginVertical: 16,
 marginHorizontal: 25,
 alignItems: 'center'
 },
 title: {
 fontSize: 20,
 color: 'white',
 },
 title1: {
    
    fontSize: 20,
},
 img:{
     width:300,
     height:225,
     resizeMode: 'contain',
     margin:8
 }
 });
AppRegistry.registerComponent("cars", () => App);
