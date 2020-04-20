import Head from 'next/head'
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <Head>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
  <div style={layoutStyle}>
    <Header />
    {/* if we remove props.children, 
    the content put inside the layout cannot be rendered */}
    {props.children} 
  </div>
  </Head>
);

export default Layout;
