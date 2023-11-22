import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import Offers from '../components/Offers';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Offers />
      <ProductsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
