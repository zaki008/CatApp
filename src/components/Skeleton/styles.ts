import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },

  content: {
    padding: 16,
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: Colors.white,
    flex: 1,
  },

  cat: {
    borderColor: Colors.border.primary,
    borderWidth: 3,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingVertical: 8,
    marginBottom: 16,
  },

  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  info: {
    marginLeft: 12,
  },

  textName: {
    width: 130,
    height: 20,
    borderRadius: 4,
    marginBottom: 4,
  },

  textOrigin: {
    width: 60,
    height: 15,
    borderRadius: 4,
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export default styles;
