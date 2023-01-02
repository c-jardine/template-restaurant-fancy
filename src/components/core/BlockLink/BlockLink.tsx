import { Box, Link } from '@chakra-ui/react';

const BlockLink = (props: {
  children: string;
  href: string;
  dark?: boolean;
}) => {
  return (
    <Box position='relative' w='max-content' role='group'>
      <Link
        href={props.href}
        fontSize={'sm'}
        fontWeight='normal'
        textTransform='uppercase'
        letterSpacing={1}
        color={props.dark ? 'black' : 'white'}
        _groupHover={{
          textDecoration: 'none',
        }}
      >
        {props.children}
      </Link>
      <Box position='relative'>
        <Box
          position='absolute'
          h={0.5}
          w='50%'
          bg='primary.600'
          transform='scaleX(100%)'
          transformOrigin='right'
          _groupHover={{
            transform: 'scaleX(0%)',
          }}
          transition='200ms ease-in-out'
        />
        <Box
          position='absolute'
          right={0}
          h={0.5}
          w='50%'
          bg='primary.600'
          transform='scaleX(100%)'
          transformOrigin='left'
          _groupHover={{
            transform: 'scaleX(0%)',
          }}
          transition='200ms ease-in-out'
        />
      </Box>
    </Box>
  );
};
export default BlockLink;
