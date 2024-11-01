import React,{useState, useLayoutEffect} from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export function DetailsScreen({route, navigation}) {
  const [todo, setTodo] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0'
      },
      headerRight: () => (
        <FontAwesome style={styles.navButton} name="save" onPress={() => navigation.navigate('Home',{todo: todo})} />
      ),
    })
  }),[navigation];

  return (
    <View style={styles.container}>
      <TextInput style={styles.newTask} onChangeText={text => setTodo(text)} value={todo} placeholder="Add new task"/>
    </View>
  )
}