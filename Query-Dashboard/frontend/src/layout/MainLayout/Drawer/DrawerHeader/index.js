import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return <DrawerHeaderStyled theme={theme} open={open}></DrawerHeaderStyled>;
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
