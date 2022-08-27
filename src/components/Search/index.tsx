import React from 'react';
import {Button, TextInput, View} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  onChangeText: (value: string) => void;
  onSearchButton: () => void;
  valueText: string;
}

const Search = (props: Props) => {
  const {title, onChangeText, onSearchButton, valueText} = props;
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.inputSearch}
        onChangeText={onChangeText}
        value={valueText}
      />
      <Button title={title} onPress={onSearchButton} />
    </View>
  );
};

export default Search;
