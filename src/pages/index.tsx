import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/products">Our Products</Link>
    </div>
  );
}
