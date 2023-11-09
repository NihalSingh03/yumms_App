import {StyleSheet} from 'react-native';
import {theme} from '../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundMain,
    padding: 16,
  },
  categoryTextActive: {
    color: theme.colors.white,
  },
  categoryTextInactive: {
    color: theme.colors.headerDarkGreen,
  },
});
