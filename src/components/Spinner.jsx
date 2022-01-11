import spinner from '../assets/bluespinner.gif';
import { StyledSpinner } from './styles/Spinner.styled';

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={spinner} alt="Loading..." />
    </StyledSpinner>
  );
};

export default Spinner;
