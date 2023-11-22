import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from './SearchBar';
import DeliveryDetails from './DeliveryDetails';
import {useSelector} from 'react-redux';

const Header = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart.value);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.userName}>Hey, Rahul</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View style={styles.cartCounter}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                color: 'white',
              }}>
              {cart.length}
            </Text>
          </View>
          <Image
            source={require('../../assets/bag.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
      <DeliveryDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  cartCounter: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#F9B023',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -12,
    left: 8,
    zIndex: 20,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 18,
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
