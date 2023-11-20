import {View, Text, StyleSheet} from 'react-native';
const DeliveryDetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.typeStyle}>DELIVERY TO</Text>
      </View>
      <View>
        <Text style={styles.typeStyle}>WITHIN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 12,
  },

  typeStyle: {
    color: '#F8F9FB',
    fontSize: 11,
    fontWeight: '800',
    opacity: 0.5,
  },
});
export default DeliveryDetails;
