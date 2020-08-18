import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },

  textInputContainer: {
    flex: 1,
    minWidth: 100,
    padding:10,
    margin: 4,
    borderRadius: 16,
    backgroundColor: "#ccc"
  },

  textInput: {
    margin: 0,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    fontSize: 13,
    color: "white",
  },

  tag: {
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4
  },
  tagLabel: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.87)"
  }
});
