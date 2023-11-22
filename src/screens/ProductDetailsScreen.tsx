import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ProductType} from '../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addItem} from '../reducers/addToCart';
import Swiper from 'react-native-swiper';
import {
  addToLikeProducts,
  removeFromLikeProducts,
} from '../reducers/likeProduct';

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState<ProductType>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const cart = useSelector(state => state.cart.value);
  const {productId} = route.params;
  const [like, setLike] = useState(false);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
      );
      const data = await response.json();

      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const discountAmount = () => {
    const discount = (
      (product!.discountPercentage / 100) *
      product!.price
    ).toFixed(2);
    return discount;
  };

  const back = '<';

  return product ? (
    <ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={{fontSize: 20, fontWeight: '600', lineHeight: 20}}>
            {back}
          </Text>
        </TouchableOpacity>
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
      <View style={styles.container}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.title}>{product.title}</Text>
      </View>
      <View style={styles.wrapper}>
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
          {like || product.isLiked ? (
            <Image
              source={require('../../assets/LikedProduct.png')}
              style={styles.likeImage}
            />
          ) : (
            <Image
              source={require('../../assets/LikeProduct.png')}
              style={styles.likeImage}
            />
          )}
        </TouchableOpacity>
        <Swiper loop={false}>
          {product.images.map(img => (
            <Image key={img} source={{uri: img}} style={styles.image} />
          ))}
        </Swiper>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>${discountAmount()} OFF</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => dispatch(addItem({...product, numOfUnits: 1}))}>
          <Text style={styles.addToCartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.descriptionHeading}>Details</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  ) : (
    <Text>Loading</Text>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 300,
  },
  like: {
    position: 'absolute',
    zIndex: 100,
    top: 10,
    right: 6,
  },
  likeImage: {
    width: 15,
    height: 15,
  },
  navbar: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F8F9FB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    padding: 20,
  },
  brand: {
    fontSize: 50,
    fontWeight: '300',
    lineHeight: 62,
    color: '#1E222B',
    marginBottom: 8,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    lineHeight: 62,
    color: '#1E222B',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#2A4BA0',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 12,
    paddingHorizontal: 10,
  },

  discountContainer: {
    backgroundColor: '#2A4BA0',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 72,
    width: 100,
    maxWidth: 130,
    marginLeft: 12,
  },
  discount: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#FAFBFD',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  addToCartButton: {
    width: 143,
    height: 56,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    paddingHorizontal: 32,
    paddingVertical: 18,
  },
  addToCartButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A4BA0',
  },

  buyNowButton: {
    width: 169,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#2A4BA0',
    paddingVertical: 18,
    paddingHorizontal: 56,
  },
  buyNowButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  descriptionHeading: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#1E222B',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#8891A5',
  },
});

export default ProductDetailsScreen;
