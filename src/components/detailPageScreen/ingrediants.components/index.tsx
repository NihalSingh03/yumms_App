import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import useViewModal from './useViewModal';
import {
  Column,
  Container,
  CustomText,
  Row,
  Spacer,
  deviceHeight,
  deviceWidth,
} from '../../layput.components';

import { IngredientsProps } from '../../../types/homeScreen.types';
import { theme } from '../../../infrastructure/theme';
import { images } from '../../../assets/images';
import { WidthHeight } from '../../style';

const Ingredients = (props: IngredientsProps) => {
  const {} = useViewModal;

  return (
    <Container
      height="auto"
      width={deviceWidth}
      backgroundColor={theme.colors.backgroundMain}>
      <ScrollView>
        <Container
          width={deviceWidth}
          backgroundColor={theme.colors.backgroundMain}
          height="auto"
          alignItems="center"
          flexDirection="column">
          {props.selectedMeal?.ingredients.map(
            (ingredient: string, index: number) => (
              <Container
                width={deviceWidth - 50}
                flexDirection="column"
                height={40}
                justifyContent="flex-start"
                margin={10}
                backgroundColor={theme.colors.backgroundMain}
                key={index}>
                <Row alignItems="center">
                  <Image
                    source={images.circleIcon}
                    style={{...WidthHeight(10, 10), marginRight: 10}}
                  />
                  <CustomText color={theme.colors.headerDarkGreen}>
                    {ingredient}
                  </CustomText>
                </Row>
                <Spacer top={10} />
                <Container width={deviceWidth - 16} height={0.5}></Container>
              </Container>
            ),
          )}
        </Container>
      </ScrollView>
    </Container>
  );
};

export default Ingredients;
