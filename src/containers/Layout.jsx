/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../atoms/theme/index.scss';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = ({ children, lang, handler }) => {
  return (
    <div>
      {console.log(lang)}
      <Helmet
        title="Marlena Czerwińska"
        meta={[
          { name: 'description', content: 'Portfolio' },
          { name: 'keywords', content: 'portfolio, cv, junior' },
        ]}
      >
        <html lang={lang} />
      </Helmet>
      <Navbar handler={handler} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
  handler: PropTypes.func,
};

export default Layout;
