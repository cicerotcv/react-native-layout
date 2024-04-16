import React from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { Text } from 'react-native';

type TypographyProps = TextStyle & {
  textProps?: Omit<TextProps, 'children' | 'style'>;
  children?: TextProps['children'];
};

export const Typography: React.FC<TypographyProps> = ({
  textProps,
  children,
  ...style
}) => {
  return <Text style={style} children={children} {...textProps} />;
};
