
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Image source={require('./assets/map.png')} />
      </View>
      <View style={styles.Bottom}>
        <View style={styles.BottomLeft}>
          <Text style={styles.LandingText}>You Can Be At Any Place You Want to Be</Text>
          <Text style={styles.LandingSmall}>Drive, listen to the radio, and explore different cities</Text>
        </View>
        <View style={styles.BottomRight}>
          <TouchableOpacity
            style={styles.Button} 
            color={"#FFCA1D"}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
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
    flex:3,
    backgroundColor: "#4B4AEF",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Bottom: {
    flex:1,
    flexDirection: "row",
    backgroundColor: "#EBEBEB",
    width: "100%",
    alignContent: "center",
    alignItems: "stretch",
  },
  BottomLeft: {
    height: "50%",
    width: "50%",
    // borderColor: "black",
    // borderRadius: 0,
    // borderWidth: 1,
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  BottomRight: {
    height: "50%",
    width: "50%",
    alignSelf: "flex-end",
    justifyContent: "flex-start",

  },
  Button: {
    backgroundColor: "#FFCA1D",
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  LandingText: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 25,
    marginHorizontal: 12,
    justifyContent: "flex-end"
  },
  LandingSmall: {
    fontSize: 12,
    fontStyle: "italic",
    margin: 12,
    justifyContent: "flex-end"
  }
});