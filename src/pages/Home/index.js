import React from 'react';

import styles from './index.module.css';

import Button from '@components/Button';

const Home = () => {
  return (
    <div>
      <span className={styles.text}>Welcome Home Page!</span>
      <Button className={styles.button}>Home</Button>
    </div>
  );
};

export default Home;
