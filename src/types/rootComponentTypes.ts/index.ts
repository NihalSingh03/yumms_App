import {ReactNode} from 'react';

export type rowColumnProps = {
  flexDirection?: string;
  justifyContent?: string;
  flexWrap?: string;
  alignItems?: string;
  children?: ReactNode;
  style?: any;
};
export interface RowProps {
  width?: number;
  minWidth?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  margin?: number;
  padding?: number;
  alignItems?: string;
  justifyContent?: string;
  flex?: number;
  flexDirection?: string;
  opacity?: number;
  flexWrap?: string;
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: string;
}
export interface customRowProps extends RowProps {
  children?: ReactNode;
}
export interface customColumnProps extends customRowProps {}

export interface StyledTextProps {
  children?: ReactNode;
  fontWeight?: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  margin?: number;
  padding?: number;
}
export interface NormalTextProps {
  fontSize?: number;
}
export interface SpacerProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
export interface ButtonProps extends RowProps {
  display?: string;
}
