import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Products or store"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
    borderRadius: 28,
    backgroundColor: '#153075',
    paddingHorizontal: 12,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SearchBar;
