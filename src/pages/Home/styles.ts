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
    paddingVertical: 16,
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

  nameCat: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Colors.text.primary,
    fontFamily: Fonts.primary[600],
  },

  origin: {
    fontSize: 12,
    textTransform: 'capitalize',
    fontFamily: Fonts.primary[500],
    color: Colors.text.secondary,
  },

  icon: {
    width: 30,
    height: 30,
  },

  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },

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
