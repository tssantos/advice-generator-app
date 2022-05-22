import React from 'react';

import styles from './styles.module.css';
import { ReactComponent as IconDice } from './assets/icon-dice.svg';

function App() {
  return (
    <div className={styles['app']}>
      <main className={styles['container']}>
        <div className={styles['card']}>
          <h1>ADVICE #117</h1>
          <p>
            “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
          </p>
          <div className={styles['divider']}>&nbsp;</div>
        </div>
        <div className={styles['icon']}>
          <IconDice />
        </div>
      </main>
    </div>
  );
}

export default App;
