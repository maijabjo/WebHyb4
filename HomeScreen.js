import React,{useState, useLayoutEffect, useEffect} from 'react';
import { Text, View, ScrollView, RecyclerViewBackedScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const STORAGE_KEY = '@todo_Key';

export function HomeScreen({navigation,route}) {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (route.params?.todo) {
      const add = {id: todos.length + 1, description: route.params.todo};
      const newTodos = [...todos,add];
      setTodos(newTodos);
      storeData(newTodos);
    }
    getData();
  },[route.params?.todo])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#ff9595',
      },
      headerRight: () => ( 
        <FontAwesome style={styles.navButton} name="plus" onPress={() => navigation.navigate('Todo')} />
      ),
    })
  }),[navigation];

  
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY,jsonValue);
    } catch (e) { 
      console.log(e);
    }
  }

  const getData = async() => {
    try {
      return AsyncStorage.getItem(STORAGE_KEY)
      .then (req => JSON.parse(req))
      .then (json => {

        if (json === null) {
          json = [];
        }
        setTodos(json);
      })
      .catch (error => console.log(error));
    } catch (e) {
      console.log(e);

    }
}

return (
  <View style={styles.container}>
    <ScrollView>
      {
        todos.map((item) => (
          <View style={styles.rowContainer} key={item.id}>
            <Text style={styles.rowText}>{item.description}</Text>
            <FontAwesome name="trash" onPress={() => navigation.navigate('Todo')} />
          </View>
        ))
      }
    </ScrollView>
  </View>
)
}