import React from 'react';
import './css/ErrorBox.module.scss';

type ErrorBoxProps = {
  message: string;
  onClose: () => void;
};

const ErrorBox: React.FC<ErrorBoxProps> = ({ message, onClose }) => {
  return (
    <div className="error-box-backdrop">
      <div className="error-box">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorBox;
