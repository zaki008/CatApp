import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './styles';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.cat}>
        <View style={styles.wrapper}>
          <View style={styles.image}></View>
          <View style={styles.info}>
            <View style={styles.textName} />
            <View style={styles.textOrigin} />
          </View>
        </View>
        <View style={styles.icon} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
