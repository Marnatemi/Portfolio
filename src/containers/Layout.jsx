import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../atoms/theme/index.scss';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import AboutMe from '../components/AboutMe/AboutMe';
// import Portfolio from '../components/Portfolio/Portfolio';
// import Advantages from '../components/Advantages/Advantages';
// import Contact from '../components/Contact/Contact';

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Marlena Czerwińska"
        meta={[
          { name: 'description', content: 'Portfolio' },
          { name: 'keywords', content: 'portfolio, cv, junior' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
