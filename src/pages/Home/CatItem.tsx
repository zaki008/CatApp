import React from 'react';
import {Image, Text, View} from 'react-native';
import {Ic_Arrow} from '../../assets/img';

import styles from './styles';

interface Props {
  image: string;
  name: string;
  origin: string;
}

const CatItem = (props: Props) => {
  const {image, name, origin} = props;
  return (
    <View style={styles.cat}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.nameCat}>{name}</Text>
          <Text style={styles.origin}>{origin}</Text>
        </View>
      </View>
      <Image style={styles.icon} source={Ic_Arrow} />
    </View>
  );
};

export default CatItem;
