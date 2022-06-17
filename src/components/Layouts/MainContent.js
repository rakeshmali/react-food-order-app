import React from 'react';

import classes from './MainContent.module.css';

const MainContent = (props) => {
  return (
    <main className={classes['main-content']}>
      <div className={classes.container}>
        <div className={classes.overlay}></div>
      </div>

        {props.children}
    </main>
  );
};

export default MainContent;
