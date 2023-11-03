import {Dimensions, Image, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {
  NormalTextProps,
  RowProps,
  SpacerProps,
  StyledTextProps,
  ButtonProps,
  customColumnProps,
  customRowProps,
} from '../types/rootComponentTypes.ts';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const Spacer = styled.View<SpacerProps>`
  width: 1px;
  opacity: 0;
  margin-top: ${({top = 0}) => top}px;
  margin-bottom: ${({bottom = 0}) => bottom}px;
  margin-left: ${({left = 0}) => left}px;
  margin-right: ${({right = 0}) => right}px;
`;
//  max-height: ${({maxHeight = deviceHeight}) => maxHeight}px;
const Row = styled.View<RowProps>`
  flex: ${({flex = 1}) => flex};
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
  justify-content: ${({justifyContent = 'center'}) => justifyContent};
  align-items: ${({alignItems = 'center'}) => alignItems};
  min-width: ${({minWidth = 200}) => minWidth}px;
  min-height: ${({minHeight = 200}) => minHeight}px;
  background-color: ${({backgroundColor = '#293241'}) => backgroundColor};
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  margin: ${({margin = 0}) => margin}px;
  padding: ${({padding = 0}) => padding}px;
  opacity: ${({opacity = 1}) => opacity};
`;

const Column = styled.View<customColumnProps>`

  flex: ${({flex = 1}) => flex};
  flex-direction: ${({flexDirection = 'column'}) => flexDirection};
  justify-content: ${({justifyContent = 'center'}) => justifyContent};
  align-items: ${({alignItems = 'center'}) => alignItems};
  width: ${({width = 200}) => width}px;

  min-height: ${({minHeight = 200}) => minHeight}px;
  background-color: ${({backgroundColor = '#293241'}) => backgroundColor};
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  margin: ${({margin = 0}) => margin}px;
  padding: ${({padding = 0}) => padding}px;
  opacity: ${({opacity = 1}) => opacity};
`;

const NormalText = styled.Text<NormalTextProps>`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontweight.medium};
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.fontSize[9]}px;
`;

const CustomText = styled.Text<StyledTextProps>`
  font-weight: ${({fontWeight = 400}) => fontWeight};
  font-size: ${({fontSize = 16}) => fontSize}px;
  font-family: ${({fontFamily = 'Rubik Regular'}) => fontFamily};
  color: ${({color = '#ffffff'}) => color};
  margin: ${({margin = 10}) => margin}px;
  padding: ${({padding = 0}) => padding}px;
`;

const Button = styled.View<ButtonProps>`
  display: ${({display = 'block'}) => display};
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
  justify-content: ${({justifyContent = 'center'}) => justifyContent};
  align-items: ${({alignItems = 'center'}) => alignItems};
  width: ${({width = 200}) => width}px;
  height: ${({height = 60}) => height}px;
  background-color: ${({backgroundColor = '#293241'}) => backgroundColor};
  border-radius: ${({borderRadius = 10}) => borderRadius}px;
  margin: ${({margin = 10}) => margin}px;
  padding: ${({padding = 0}) => padding}px;
`;

export const RootComponents = {
  Spacer,
  Row,
  Column,
  CustomText,
  NormalText,
  Button,
};
