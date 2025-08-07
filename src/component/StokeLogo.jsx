import React from 'react';
import { Box, Typography } from '@mui/material';

const StokeLogo = ({ size = 2 }) => {
  // `size` controls STOKE font size in rem
  const stokeSize = `${size}rem`;
  const exclamationSize = `${size * 2}rem`; // twice STOKE size
  const seSize = `${size * 0.5}rem`; // half STOKE size

  return (
    <Box display="flex" alignItems="baseline">
      {/* Main "STOKE" */}
      <Typography
        variant="h6"
        sx={{ fontSize: stokeSize, fontWeight: 'bold', lineHeight: 1 }}
      >
        STOKE
      </Typography>

      {/* Large "!" */}
      <Typography
        variant="h6"
        sx={{
          fontSize: exclamationSize,
          fontWeight: 'bold',
          lineHeight: 0.8,
          ml: 0.3,
        }}
      >
        !
      </Typography>

      {/* Small "SE" */}
      <Typography
        variant="h6"
        sx={{
          fontSize: seSize,
          fontWeight: 'bold',
          lineHeight: 1,
          ml: 0.3,
        }}
      >
        SE
      </Typography>
    </Box>
  );
};

export default StokeLogo;
