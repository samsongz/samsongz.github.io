import React, { Component } from 'react';
import Content from './Content';
import Nav     from './Nav';
import Title   from './Title';
import About   from './About';
import Work    from './Work';
import Contact from './Contact';

import styles from './site-container.css'
/**
 * A border for the whole page
 */
export default class SiteContainer extends Component {
  render() {
    return (
      <div className={`${styles.containerBorder} ${styles.containerBody}`}>
          <Title />
          <Nav />


          <About />
          <Work />
          <Contact />
      </div>
    );
  }
}
