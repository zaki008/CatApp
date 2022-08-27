import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
}

const Header = (props: Props) => {
  const {text} = props;
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{text}</Text>
    </View>
  );
};

export default Header;
