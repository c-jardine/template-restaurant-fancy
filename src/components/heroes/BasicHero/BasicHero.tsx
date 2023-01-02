import {
  AbsoluteCenter,
  Box,
  Button,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import { Estonia } from '@next/font/google';

const estonia = Estonia({ weight: '400' });

const BasicHero = () => {
  return (
    <Box position='relative'>
      <Image
        src='https://unsplash.com/photos/GXXYkSwndP4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNjEwMzQ3&force=true&w=1920'
        alt=''
        maxW='1920px'
        w='full'
        h='100vh'
        objectFit='cover'
      />
      <AbsoluteCenter w='full' h='100vh' bg='black' opacity={0.8} />
      <AbsoluteCenter
        display='flex'
        w='full'
        h='full'
        justifyContent='center'
        alignItems='center'
      >
        <Stack alignItems='center' spacing={16}>
          <Box>
            <Text
              className={estonia.className}
              fontSize={['5xl', '7xl']}
              color='white'
              textAlign='center'
            >
              Riverfront Bistro
            </Text>
            <Text mt={-2} textTransform='uppercase' letterSpacing={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Text>
          </Box>
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Button variant='outline'>View the menu</Button>
            <Button variant='solid' colorScheme='primary'>
              Make a reservation
            </Button>
          </Stack>
        </Stack>
      </AbsoluteCenter>
    </Box>
  );
};
export default BasicHero;
