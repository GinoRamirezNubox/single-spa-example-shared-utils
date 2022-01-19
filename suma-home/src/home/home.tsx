import React from 'react';
import { Box } from 'theme-ui';
import { getToken } from '@suma/auth-utils';

export const Home: React.FC = () => {
  return (
    <Box sx={{ bg: 'muted', color: 'primary', p: 3, mt: '50px' }}>
      <h1>Home {getToken()}</h1>
    </Box>
  );
};
