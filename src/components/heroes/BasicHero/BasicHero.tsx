import { AbsoluteCenter, Box, Button, Stack, Text } from '@chakra-ui/react';
import { Estonia } from '@next/font/google';
import Image from 'next/image';
import heroImg from '../../../../public/images/bar-header.jpg';

const estonia = Estonia({ weight: '400' });

const BasicHero = () => {
  return (
    <Box position='relative' w='full' h='100vh'>
      <AbsoluteCenter w='full' h='full'>
        <Box position='relative' w='full' h='full'>
          <Image
            src={heroImg}
            alt='Header image'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </AbsoluteCenter>
      <AbsoluteCenter w='full' h='100vh' bg='black' opacity={0.8} />
      <AbsoluteCenter
        display='flex'
        w='full'
        h='full'
        justifyContent='center'
        alignItems='center'
      >
        <Stack alignItems='center' spacing={16}>
          <Box textAlign='center'>
            <Text
              className={estonia.className}
              fontSize={['5xl', '7xl']}
              color='white'
              textAlign='center'
            >
              Riverfront Bistro
            </Text>
            <Text mt={-1} textTransform='uppercase' letterSpacing={1}>
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
