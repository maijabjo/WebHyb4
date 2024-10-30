import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingTop:  Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#0cff0c',
    justifyContent: 'center',
    paddingLeft: 50,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  rowText: {
    fontSize: 16,
    marginLeft: 60,
  },
  navButton: {
    marginRight: 40,
    fontSize: 10,
    padding: 24
  },
});