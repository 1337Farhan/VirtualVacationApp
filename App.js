
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Text>Farhan</Text>
      </View>
      <View style={styles.Bottom}>
        <View style={styles.ButtonSize}>
          <Button
            style={styles.Button} 
            title="text" 
            color={"#FFCA1D"}
          />
        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Upper: {
    flex:2,
    backgroundColor: "#4B4AEF",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Bottom: {
    flex:1,
    backgroundColor: "#EBEBEB",
    width: "100%",
    alignContent: "center",
  },
  ButtonSize: {
    width: 100,
    height: 50,
    margin: 60,
    alignContent: "center",
    justifyContent: 'center',

  },
  Button: {

  },
});