import React from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { compose, override } from '../utils';

type LayoutProps = ViewStyle & {
  viewProps?: Omit<ViewProps, 'children' | 'style'>;
  children?: ViewProps['children'];
};

const BaseLayout: React.FC<LayoutProps> = ({
  viewProps,
  children,
  ...style
}) => {
  return <View style={style} children={children} {...viewProps} />;
};

export const Layout = compose(BaseLayout, {
  Row: override(BaseLayout, { flexDirection: 'row' }),
  Column: override(BaseLayout, { flexDirection: 'column' }),
});
