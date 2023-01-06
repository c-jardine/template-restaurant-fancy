import { Box, Container, SimpleGrid, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { BlockLink } from '../../core';
import foodMenu from '../../../../public/images/food.jpg';
import drinkMenu from '../../../../public/images/bar.jpg';
import dessertMenu from '../../../../public/images/dessert.jpg';
import specialsMenu from '../../../../public/images/specials-board.jpg';

const SimpleFeaturesGrid = () => {
  return (
    <Container maxW='8xl' w='full'>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={8}>
        <Stack alignItems='center'>
          <Box
            position='relative'
            w='full'
            minH='sm'
            borderWidth={2}
            borderColor='primary.600'
          >
            <Image src={foodMenu} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <BlockLink href='/food'>Food Menu</BlockLink>
        </Stack>
        <Stack alignItems='center'>
          <Box
            position='relative'
            w='full'
            minH='sm'
            borderWidth={2}
            borderColor='primary.600'
          >
            <Image src={drinkMenu} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <BlockLink href='/drinks'>Drink Menu</BlockLink>
        </Stack>
        <Stack alignItems='center'>
          <Box
            position='relative'
            w='full'
            minH='sm'
            borderWidth={2}
            borderColor='primary.600'
          >
            <Image
              src={dessertMenu}
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <BlockLink href='#'>Desserts</BlockLink>
        </Stack>
        <Stack alignItems='center'>
          <Box
            position='relative'
            w='full'
            minH='sm'
            borderWidth={2}
            borderColor='primary.600'
          >
            <Image
              src={specialsMenu}
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <BlockLink href='#'>Specials</BlockLink>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
export default SimpleFeaturesGrid;
