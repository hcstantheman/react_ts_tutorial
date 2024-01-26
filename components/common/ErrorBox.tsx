import React from 'react';
import styles from './css/ErrorBox.module.scss';

type ErrorBoxProps = {
  message: string;
  onClose: () => void;
};

const ErrorBox: React.FC<ErrorBoxProps> = ({ message, onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorBox;
