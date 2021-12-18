import React from 'react';
import cn from 'classnames';

import styles from './index.module.css';

const Button = ({ children, className }) => {
  return (
    <button type="submit" className={cn(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
