import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },

  inputSearch: {
    height: 40,
    width: 280,
    marginVertical: 24,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: Colors.border.primary,
  },
});

export default styles;
