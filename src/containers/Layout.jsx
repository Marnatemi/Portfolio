import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../atoms/theme/index.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';
import Advantages from '../components/Advantages/Advantages';
import Contact from '../components/Contact/Contact';

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <AboutMe />
        <Portfolio />
        <Advantages />
        <Contact />
        <Footer />
      </>
    )}
  />
);

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
