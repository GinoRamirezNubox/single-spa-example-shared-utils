import React from 'react';
import { Flex } from 'theme-ui';
import { getToken } from '@suma/auth-utils';

export const Navbar: React.FC = () => {
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'purple',
        height: '50px',
        padding: '0 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h2 style={{ margin: 0 }}>Suma Navbar {getToken()}</h2>
    </Flex>
  );
};
