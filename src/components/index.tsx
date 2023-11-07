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
  rowColumnProps,
} from '../types/rootComponentTypes.ts';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

/*
height=statusBarHeight + (appBarHeight ? appBarHeight : 0) + containerHeight + ( tabBarHeight ? tabBarHeight : 0 ) 

  console.log(StatusBar.currentHeight);
*/

export const Spacer = styled.View<SpacerProps>`
  width: 1px;
  opacity: 0;
  margin-top: ${({top = 0}) => top}px;
  margin-bottom: ${({bottom = 0}) => bottom}px;
  margin-left: ${({left = 0}) => left}px;
  margin-right: ${({right = 0}) => right}px;
`;

const ChildContainer = styled.View<rowColumnProps>`
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  flex-wrap: ${({flexWrap}) => flexWrap};
`;

export const Row: React.FC<rowColumnProps> = ({
  justifyContent,
  alignItems = 'stretch',
  children,
  style,
  flexWrap = 'nowrap',
}) => {
  const styleProps = {
    justifyContent,
    alignItems,
    flexWrap,
    flexDirection: 'row',
  };

  return (
    <ChildContainer style={style} {...styleProps}>
      {children}
    </ChildContainer>
  );
};

export const Column: React.FC<rowColumnProps> = ({
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
  style,
  flexWrap = 'nowrap',
}) => {
  const styleProps = {
    justifyContent,
    alignItems,
    flexWrap,
    flexDirection: 'column',
  };
  return (
    <ChildContainer {...styleProps} style={style}>
      {children}
    </ChildContainer>
  );
};

export const Container = styled.View<RowProps>`
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
  justify-content: ${({justifyContent = 'center'}) => justifyContent};
  align-items: ${({alignItems = 'stretch'}) => alignItems};
  flex-wrap: ${({flexWrap = 'no-wrap'}) => flexWrap};
  width: ${({width = 200}) => width}px;
  height: ${({height = 150}) => height}px;
  background-color: ${({backgroundColor = '#293241'}) => backgroundColor};
  margin: ${({margin = 0}) => margin}px;
  padding: ${({padding = 0}) => padding}px;
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  border: ${({borderWidth = 1}) => borderWidth}px
    ${({borderStyle = 'solid'}) => borderStyle}
    ${({borderColor = '#D1D5DB'}) => borderColor};
`;

//  max-height: ${({maxHeight = deviceHeight}) => maxHeight}px;
// const Row1 = styled.View<RowProps>`
//   flex: ${({flex = 1}) => flex};
//   flex-direction: ${({flexDirection = 'row'}) => flexDirection};
//   justify-content: ${({justifyContent = 'center'}) => justifyContent};
//   align-items: ${({alignItems = 'stretch'}) => alignItems};
//   min-width: ${({minWidth = 200}) => minWidth}px;
//   min-height: ${({minHeight = 200}) => minHeight}px;
//   background-color: ${({backgroundColor = '#293241'}) => backgroundColor};
//   border-radius: ${({borderRadius = 0}) => borderRadius}px;
//   margin: ${({margin = 0}) => margin}px;
//   padding: ${({padding = 0}) => padding}px;
//   opacity: ${({opacity = 1}) => opacity};
// `;
// const customView = styled.View<RowProps>`
//   flex: 1;
//   flex-direction: ${({flexDirection = 'row'}) => flexDirection};
//   background-color: green;
// `;

// const Column1 = styled.View<customColumnProps>`
//   flex: ${({flex = 1}) => flex};
//   flex-direction: ${({flexDirection = 'column'}) => flexDirection};
//   justify-content: ${({justifyContent = 'center'}) => justifyContent};
//   align-items: ${({alignItems = 'center'}) => alignItems};
//   width: ${({width = 200}) => width}px;

//   min-height: ${({minHeight = 200}) => minHeight}px;
//   background-color: ${({backgroundColor = '#293241'}) => backgroundColor};
//   border-radius: ${({borderRadius = 0}) => borderRadius}px;
//   margin: ${({margin = 0}) => margin}px;
//   padding: ${({padding = 0}) => padding}px;
//   opacity: ${({opacity = 1}) => opacity};
// `;

// const NormalText = styled.Text<NormalTextProps>`
//   color: ${props => props.theme.colors.primary};
//   font-weight: ${props => props.theme.fontweight.medium};
//   font-size: ${props =>
//     props.fontSize ? props.fontSize : props.theme.fontSize[9]}px;
// `;

export const CustomText = styled.Text<StyledTextProps>`
  font-weight: ${({fontWeight = 400}) => fontWeight};
  font-size: ${({fontSize = 16}) => fontSize}px;
  font-family: ${({fontFamily = 'Rubik Regular'}) => fontFamily};
  color: ${({color = '#ffffff'}) => color};
  margin: ${({margin = 0}) => margin}px;
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

  Button,
};
