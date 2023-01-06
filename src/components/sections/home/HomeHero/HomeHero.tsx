import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { Estonia } from '@next/font/google';
import { useRouter } from 'next/router';
import heroImg from '../../../../../public/images/bar-header.jpg';
import { IconDivider } from '../../../core';
import { BasicHero } from '../../../heroes';

const estonia = Estonia({ weight: '400' });

const HomeHero = () => {
  const router = useRouter();

  return (
    <BasicHero img={heroImg}>
      <Stack alignItems='center' spacing={16}>
        <Box textAlign='center'>
          <IconDivider />
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
          <Button variant='outline' onClick={() => router.push('/food')}>
            View the menu
          </Button>
          <Button variant='solid' colorScheme='primary'>
            Make a reservation
          </Button>
        </Stack>
      </Stack>
    </BasicHero>
  );
};

export default HomeHero;
