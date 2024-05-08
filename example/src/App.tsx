import * as React from 'react';

import { Layout, Typography } from '@cicerotcv/react-native-layout';

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
      <Layout.Row justifyContent="space-between">
        <Layout.Column flex={1}>
          <Typography>first column</Typography>
        </Layout.Column>
        <Layout.Column flex={1}>
          <Typography>second column</Typography>
        </Layout.Column>
        <Layout.Column flex={1}>
          <Typography>third column</Typography>
        </Layout.Column>
      </Layout.Row>

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
