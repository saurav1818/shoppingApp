import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Product from '../components/Product';

const FavouriteScreen = () => {
  const favouriteProducts = useSelector(state => state.like.value);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favourites</Text>
      <FlatList
        data={favouriteProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Product product={item} inFavourite={true} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#1E222B',
  },
});

export default FavouriteScreen;
