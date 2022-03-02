import { Textfit } from 'react-textfit';
import './Screen.css';

export const Screen = ({ value }) => {
  return (
    <Textfit className='screen' mode='sigle' max={70}>
      {value}
    </Textfit>
  );
};
