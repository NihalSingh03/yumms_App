import {StyleSheet} from 'react-native';

export const WidthHeight = (
  componentwidth: number,
  componentheight: number,
) => {
  const styles = StyleSheet.create({
    widthHeight: {
      width: componentwidth,
      height: componentheight,
    },
  });
  return styles.widthHeight;
};
