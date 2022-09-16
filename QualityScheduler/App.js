import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Saf } from 'react-native';

//screens
import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <View style={styles.root}>
      <SignInScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
