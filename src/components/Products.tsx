import {View, Text, Image, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('PRODUCTS STATE');
  console.log(products);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommended</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 38,
    color: '#1E222B',
  },
});

export default Products;
