import * as React from 'react';
import './styles.scss';

interface IProps extends React.CSSProperties {
  /**
   * The text of the button
   */
  text?: string;
  disabled?: boolean;
  onClick?: () => any;
}

const SnazzyButton: React.FC<IProps> = ({ text, disabled = false, ...styles }) => {
  return (
    <button style={styles} disabled={disabled} className="sha-btn">
      {text}
    </button>
  );
};

SnazzyButton.displayName = 'SnazzyButton';

export default SnazzyButton;
