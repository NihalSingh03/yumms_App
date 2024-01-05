import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useViewModal from './useViewModal';

import {
  Container,
  CustomText,
  Row,
  Spacer,
  deviceWidth,
} from '../../layput.components';
import { images } from '../../../assets/images';
import { WidthHeight } from '../../style';
import { IngredientsProps } from '../../../types/homeScreen.types';
import { theme } from '../../../infrastructure/theme';


const Preperation = (props: IngredientsProps) => {
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
          {props.selectedMeal?.steps.map(
            (preperation: string, index: number) => (
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
                    {preperation}
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

export default Preperation;
