import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ProductType} from '../types/types';
import {
  decreaseNumOfUnitsOfSpecificProduct,
  increaseNumOfUnitsOfSpecificProduct,
  removeItem,
} from '../reducers/addToCart';

const CartItem: React.FC<{product: any; index: number}> = ({
  product,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.productDetails}>
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <View style={styles.productName}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          disabled={product.numOfUnits === 0}
          onPress={() => {
            if (product.numOfUnits === 1) {
              dispatch(removeItem(product));
            } else if (product.numOfUnits > 1) {
              dispatch(decreaseNumOfUnitsOfSpecificProduct(index));
            }
          }}>
          <Text style={{fontSize: 20}}>-</Text>
        </TouchableOpacity>
        <Text>{product.numOfUnits}</Text>
        <TouchableOpacity
          style={styles.actionButton}
          disabled={product.numOfUnits === product.stock}
          onPress={() => dispatch(increaseNumOfUnitsOfSpecificProduct(index))}>
          <Text style={{fontSize: 20}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F8F9FB',
    padding: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  container: {
    margin: 15,
    // borderBottomWidth: 1,
    // borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  productName: {
    display: 'flex',
    maxWidth: 200,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  price: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
});

export default CartItem;
