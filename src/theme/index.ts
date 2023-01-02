import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { config } from './config';
import * as styles from './styles';

export const theme = extendTheme({
  config,
  colors,
  styles,
  components: {
    Button: {
      baseStyle: {
        rounded: 'none',
        fontWeight: 'bold',
        letterSpacing: 1,
        textTransform: 'uppercase',
        pt: 0.5
      },
      variants: {
        outline: {
          color: 'white',
          borderColor: 'white',
          fontSize: 'xs',
          _hover: {
            bg: 'white',
            color: 'black',
          },
        },
        solid: {
          bg: 'primary.500',
          color: 'white',
          fontSize: 'xs',
          _hover: {
            bg: 'primary.400',
          },
        },
      },
    },
  },
});
