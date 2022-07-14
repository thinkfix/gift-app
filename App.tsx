import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View, Linking, Pressable, Alert, Modal} from 'react-native';

const CURRENCY = 'UAH';

const wishlistData = [
  {
    name: 'T-shirt',
    url: 'https://7mntns.com/man/t-shirt/4362/',
    price: '440'
  },
  {
    name: 'Book',
    url: 'https://7mntns.com/man/t-shirt/4362/',
    price: '120'
  },
  {
    name: 'Refrigerator',
    url: 'https://7mntns.com/man/t-shirt/4362/',
    price: '12000'
  }
];

const Item = ({ name, price, url }) => (
    <View style={styles.item}>
      <Pressable onPress={() => Linking.openURL(url)}>
        <Text style={styles.name}>{name}</Text>
        <Text>{price} {CURRENCY}</Text>
      </Pressable>
    </View>
);

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => (
      <Item name={item.name} price={item.price} url={item.url}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>My Wishlist</Text>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>I wish +</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={wishlistData} renderItem={renderItem}/>
      </View>
      <StatusBar style="auto" />
      <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
        >
          <View style={styles.centeredView}>
            <Text>Modal content</Text>
            <Pressable
                onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  addButton: {
    backgroundColor: '#f00',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  addButtonText: {
    color: '#fff',
    fontWeight: "700"
  }
});
