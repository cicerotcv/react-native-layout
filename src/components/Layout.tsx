import React from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';

type LayoutProps = ViewStyle & {
  viewProps?: Omit<ViewProps, 'children' | 'style'>;
  children?: ViewProps['children'];
};
export const Layout: React.FC<LayoutProps> = ({
  viewProps,
  children,
  ...style
}) => {
  return <View style={style} children={children} {...viewProps} />;
};
