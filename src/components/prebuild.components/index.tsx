import styled from 'styled-components/native';
import {SearchBoxProps} from '../../types/rootComponentTypes.ts/prebuildComponents';
import {theme} from '../../infrastructure/theme';
import {Container} from '../layput.components';
import {TextInput} from 'react-native';
import { StyleSheet } from 'react-native';

const {
  deviceHeight,
  deviceWidth,
  colors,
  fontFamily,
  fontSize,
  fontweight,
  letterSpacing,
  margin,
  padding,
} = theme;

const SearchBox = styled.View<SearchBoxProps>`
  width: ${props =>
    props.width ? props.width : props.theme.deviceWidth - 64}px;
  height: ${props => (props.height ? props.height : 50)}px;
  background-color: ${colors.white};
`;

export const SearchBar = (props: any) => {
  const {width, height, onChangeText, placeHolder} = props;
  const containerWidth = width ? width : deviceWidth - 64;
  return (
    <Container
      width={containerWidth}
      height={height ? height : 50}
      backgroundColor="white"
      justifyContent="flex-start">
      <TextInput
        placeholder={placeHolder ? placeHolder : 'Search Recipie'}
        style={{
          width: containerWidth - 46,
          backgroundColor: 'red',
          paddingLeft: padding.pd10,
          color: colors.white,
        }}
      />
    </Container>
  );
};

const styles=StyleSheet.create( 
{textInputField:{
    // width: containerWidth - 46,
    backgroundColor: 'red',
    paddingLeft: padding.pd10,
    color: colors.white,
},}


)