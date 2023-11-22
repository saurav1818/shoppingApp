import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import Product from './Product';
import {ProductType} from '../types/types';

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommended</Text>
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Product product={item} />;
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 38,
    color: '#1E222B',
  },
});

export default ProductsList;
