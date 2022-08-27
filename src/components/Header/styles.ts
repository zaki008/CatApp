import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
    fontFamily: Fonts.primary[700],
  },

  textHeader: {
    fontSize: 22,
    color: Colors.white,
    textTransform: 'capitalize',
    fontFamily: Fonts.primary[700],
  },
});

export default styles;
