import {View, ScrollView, Image, StyleSheet} from 'react-native';

const Offers = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image source={require('../../assets/Card.png')} style={styles.image} />
        <Image source={require('../../assets/Card.png')} style={styles.image} />
        <Image source={require('../../assets/Card.png')} style={styles.image} />
        <Image source={require('../../assets/Card.png')} style={styles.image} />
        <Image source={require('../../assets/Card.png')} style={styles.image} />
        <Image source={require('../../assets/Card.png')} style={styles.image} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 269,
    height: 123,
    marginHorizontal: 10,
  },
});

export default Offers;
