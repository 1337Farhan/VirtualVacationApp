
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Image style={styles.Img} source={require('./assets/Top.png')} />
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
            <Text style={styles.buttonText}>Get started now!</Text>
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
    height: "100%",
    width: "50%",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  BottomRight: {
    height: "100%",
    width: "50%",
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 50,
  },
  Button: {
    justifyContent: "center",
    height: 40,
    width: 200,
    backgroundColor: "#FFCA1D",
    borderRadius: 20,
    margin: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 2,
    color: "black",
    textAlign: "center",
  },
  LandingText: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginBottom: 0,
    marginHorizontal: 12,
    justifyContent: "flex-end"
  },
  LandingSmall: {
    fontSize: 12,
    fontStyle: "italic",
    margin: 12,
    justifyContent: "flex-end"
  },
  Img: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
  }
});