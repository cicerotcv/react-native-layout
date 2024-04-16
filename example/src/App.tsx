import * as React from 'react';

import { Layout, Typography } from '@cicerotcv/react-native-layout';

export default function App() {
  return (
    <Layout
      flex={1}
      backgroundColor="gray"
      justifyContent="center"
      alignItems="center"
      viewProps={{
        collapsable: true,
      }}
    >
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
