import React from 'react';
import {Box} from 'rebass';

export const Divider = props =>
  <Box
    {...props}
    as='hr'
    sx={{
      bg: 'primary',
      border: 0,
      height: 2,
      mb: 2
    }}
  />

export const Spacer = props =>
  <Box
    {...props}
    sx={{
      height: "1em",
    }}
  />
