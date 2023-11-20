import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from './SearchBar';
import DeliveryDetails from './DeliveryDetails';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hey, Rahul</Text>
      <SearchBar />
      <DeliveryDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#2A4BA0',
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },
});

export default Header;
