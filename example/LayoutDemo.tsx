import Layout from '$component/Layout';
import * as React from 'react';

const { Header, Footer, Aside, Section } = Layout;

export default function LayoutDemo() {
  const [width, setWidth] = React.useState(300);
  return (
    <div>
      <div className='demo'>
        <Layout >
          <Header>Header</Header>
          <Section>Section</Section>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div className='demo'>
        <Layout >
          <Header>Header</Header>
          <Layout >
            <Aside width={300}>Aside</Aside>
            <Section>Section</Section>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div className='demo'>
        <Layout mode='flex'>
          <Header>Header</Header>
          <Layout>
            <Aside width={width} onClick={() => setWidth(width + 10)}>Aside</Aside>
            <Section>Section</Section>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div className='demo'>
        <Layout style={{ height: '100%' }}>
          <Aside width={300}>Aside</Aside>
          <Layout mode='flex'>
            <Header>Header</Header>
            <Section>Section</Section>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
