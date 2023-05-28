import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/Navigation';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <AppNavigation />
  );
}
