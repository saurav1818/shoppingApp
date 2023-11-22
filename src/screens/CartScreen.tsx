import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart.value);
  const back = '<';

  const getTotal = () => {
    let totalAmount = 0;
    cart.forEach((product: any) => {
      totalAmount += product.price * product.numOfUnits;
    });
    return totalAmount;
  };
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={{fontSize: 20, fontWeight: '600', lineHeight: 20}}>
            {back}
          </Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Shopping Cart ({cart.length})</Text>
      </View>

      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <CartItem product={item} index={index} />;
        }}
      />
      <View style={styles.checkOutContainer}>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>SubTotal</Text>
          <Text style={styles.value}>${getTotal()}</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>Delivery</Text>
          <Text style={styles.value}>$2.00</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>Total</Text>
          <Text style={styles.value}>${getTotal() + 2}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed To checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F8F9FB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 15,
    height: '100%',
  },
  heading: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#1E222B',
  },
  checkOutContainer: {
    backgroundColor: '#F8F9FB',
    padding: 15,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    bottom: 0,
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  type: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#616A7D',
  },
  value: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#1E222B',
  },
  checkoutButton: {
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 92,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 15,
  },
  checkoutText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default CartScreen;
