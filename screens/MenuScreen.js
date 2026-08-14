import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from "react-native";
import styles from "../styles/styles";
import React, {useState} from "react";

const menuItems = [
{
id: "1",
name: "Cappuccino",
price: "Rs.550",
},
{
id: "2",
name: "Café Latte",
price: "Rs. 500",
},
{
id: "3",
name: "Café Americano",
price: "Rs. 400",
},
{
id: "4",
name: "Espresso",
price: "Rs. 350",
},
{
id: "5",
name: "Café Mocha",
price: "Rs. 550",
},
{
id: "6",
name: "Flat White",
price: "Rs. 500",
},
{
id: "7",
name: "Caramel Latte",
price: "Rs. 600",
},
{
id: "8",
name: "Vanilla Latte",
price: "Rs. 600",
},
{
id: "9",
name: "Iced Coffee",
price: "Rs. 500",
},
{
id: "10",
name: "Iced Mocha",
price: "Rs. 550",
},
];
export default function MenuScreen({ navigation }) {

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredMenu = menuItems.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {
  setFavorites((prev) =>
    prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
  );};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        style={styles.searchInput}
        placeholder="Search Menu..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Text style={{ fontSize: 20 }}>
                {favorites.includes(item.id) ? "Add to Cart  ✅" : "Add to Cart  🔳"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}


