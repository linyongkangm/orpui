
import Layout from '$component/Layout';
import * as React from 'react';

const { Header, Footer, Aside, Section } = Layout;

export const Demo = (props: any) => {
  const [width, setWidth] = React.useState(10);
  return (
    <Layout >
      <Header>Header</Header>

      <Layout>
        <Aside width={width} onClick={() => setWidth(width + 1)}>Aside</Aside>
        <Section>Section</Section>
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  );
};
