import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  itemDescription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  itemPrice: {
    fontSize: 18,
    alignItems: "center",
    marginBottom: 10,
  },

  button: {
    width: "80%",
    backgroundColor: "#6c4ed9",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuCard: {
    backgroundColor: "#8d6842",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
},
  searchInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
},
});
