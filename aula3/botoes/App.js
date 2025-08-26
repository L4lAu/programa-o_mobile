
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function App() {




  function botao() {
    console.log(`cor: ${styles.botao1.backgroundcolor}`)
  }
  return (
    <>

{/* BOTAO 1 */}
      <View style={styles.container}>

        <View style={styles.box}>

          <View style={styles.dento}>
            <TouchableOpacity style={styles.butao} onPress={botao}>
              <Text style={styles.texto} >botão 1 </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dento}>
            <TouchableOpacity style={styles.butao2} >
              <Text style={styles.texto}>botão 2</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

{/* BOTAO 2 */}


      <View style={styles.container}>

        <View style={styles.box}>

          <View style={styles.dento}>
            <TouchableOpacity style={styles.butao2} >
              <Text style={styles.texto}>botão 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dento}>
            <TouchableOpacity style={styles.butao} onPress={botao}>
              <Text style={styles.texto} >botão 4 </Text>
            </TouchableOpacity>
          </View>


        </View>

      </View>


{/* BOTAO 3 */}



      <View style={styles.container}>

        <View style={styles.box}>

          <View style={styles.dento}>
            <TouchableOpacity style={styles.butao} onPress={botao}>
              <Text style={styles.texto} >botão 5 </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dento}>
            <TouchableOpacity style={styles.butao2} >
              <Text style={styles.texto}>botão 6</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </>
  );
}