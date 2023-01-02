import React from 'react';
import { BasicHero } from '../../../heroes';
import heroImg from '../../../../../public/images/bar-header.jpg';
import { Box, Text, Stack, Button } from '@chakra-ui/react';
import { Estonia } from '@next/font/google';

const estonia = Estonia({ weight: '400' });

const HomeHero = () => {
  return (
    <BasicHero img={heroImg}>
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
    </BasicHero>
  );
};

export default HomeHero;
