import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';
import "./centered-circular-progress.css";

const CenteredCircularProgress: FC = () => {
  return (
    <Box
      m="auto"
      display="flex"
      height="75vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      data-testid="loading-indicator"
      className="box-container"
    >
      <CircularProgress className="loader-color"/>
    </Box>
  );
};

export { CenteredCircularProgress };
