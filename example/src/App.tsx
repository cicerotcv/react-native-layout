import * as React from 'react';

import { Layout, Skeleton, Typography } from '@cicerotcv/react-native-layout';
import { Easing } from 'react-native-reanimated';
import type { ViewStyle } from 'react-native';

const CustomSkeleton = (props: ViewStyle) => (
  <Skeleton
    animationConfig={{
      minOpacity: 0.4,
      maxOpacity: 0.8,
      stepDuration: 400,
      easing: Easing.inOut(Easing.ease),
    }}
    {...props}
  />
);

export default function App() {
  return (
    <Layout
      flex={1}
      justifyContent="center"
      alignItems="flex-start"
      paddingHorizontal={16}
      gap={16}
      viewProps={{
        collapsable: true,
      }}
    >
      <Layout gap={8}>
        <CustomSkeleton width={140} />
        <CustomSkeleton width={150} />
        <CustomSkeleton width={140} />
      </Layout>
      <Typography
        color="red"
        backgroundColor="black"
        fontWeight="bold"
        fontSize={32}
      >
        Hello World
      </Typography>
    </Layout>
  );
}
