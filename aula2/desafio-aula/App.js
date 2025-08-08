import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style';

export default function App() {
  return (
    <>
      <View style={styles.navio}>

        <View style={styles.container1}>
          <View style={styles.area1}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
          <View style={styles.area2}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
        </View>


        <View style={styles.container2}>
          <View style={styles.area3}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
          <View style={styles.area4}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
        </View>


        <View style={styles.container3}>
          <View style={styles.area5}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
          <View style={styles.area6}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
        </View>
      </View>
    </>
  );
}
