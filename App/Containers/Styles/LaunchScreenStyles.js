import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  Container: {
    backgroundColor: "#2b2d35",
    width: "100%",
    height: "100%",
  },
  Button: {
    backgroundColor: "#cc0c1c",
    width: "60%",
    marginLeft: "20%",
    height: 65,
    borderRadius: 25,
    marginTop: 20,
  },
  ButtonText: {
    color: "#fafafa",
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1.2,
  }
})
