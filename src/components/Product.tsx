import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addItem} from '../reducers/addToCart';
import {ProductType} from '../types/types';
import {
  addToLikeProducts,
  removeFromLikeProducts,
} from '../reducers/likeProduct';
import {useState} from 'react';

const Product: React.FC<{
  product: ProductType;
  inFavourite?: boolean;
}> = ({product, inFavourite}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  return (
    <TouchableOpacity
      style={styles.product}
      onPress={() =>
        navigation.navigate('ProductDetailsScreen', {
          productId: product.id,
        })
      }>
      <View>
        <TouchableOpacity
          style={styles.like}
          onPress={() => {
            if (like) {
              setLike(false);
              dispatch(removeFromLikeProducts({...product, isLiked: false}));
            } else {
              setLike(true);
              dispatch(addToLikeProducts({...product, isLiked: true}));
            }
          }}>
          {!inFavourite &&
            (like || product.isLiked ? (
              <Image
                source={require('../../assets/LikedProduct.png')}
                style={styles.likeImage}
              />
            ) : (
              <Image
                source={require('../../assets/LikeProduct.png')}
                style={styles.likeImage}
              />
            ))}
        </TouchableOpacity>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.productDetails}>
        <View>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          disabled={product.numOfUnits > 1}
          onPress={() => dispatch(addItem({...product, numOfUnits: 1}))}>
          <Text style={{color: 'white', fontSize: 16}}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#2A4BA0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product: {
    margin: 18,
  },
  like: {
    position: 'absolute',
    zIndex: 100,
    top: 10,
    left: 6,
  },
  likeImage: {
    width: 15,
    height: 15,
  },
  image: {
    width: 160,
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#1E222B',
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#616A7D',
    maxWidth: 132,
  },
});

export default Product;
