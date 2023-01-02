import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import Image from 'next/image';
import { BlockLink } from '../../core';
import seatingImg from '../../../../public/images/seating.jpg';

const serif = Cormorant_Garamond({ weight: '300' });

const SplitHero = () => {
  return (
    <Container maxW='7xl' w='full'>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 5 }}
        gap={16}
        alignItems='center'
      >
        <Stack
          gridColumn={{ base: '1', md: '1', xl: '1 / span 2' }}
          spacing={6}
          py={{ base: 0, md: 16 }}
        >
          <Text
            fontWeight='semibold'
            textTransform='uppercase'
            color='primary.500'
          >
            Our story
          </Text>
          <Text
            className={serif.className}
            fontSize={{ base: '4xl', md: '6xl' }}
            lineHeight={1}
            letterSpacing={2}
            textTransform='uppercase'
          >
            Lorem ipsum dolor sit
          </Text>
          <Text letterSpacing={0.5} lineHeight={1.75}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            officiis labore cupiditate voluptatem rerum facere, mollitia,
            laborum nesciunt soluta ad tempore recusandae inventore excepturi
            cumque eveniet commodi officia quas voluptate!
          </Text>
          <BlockLink href='#'>Learn more</BlockLink>
        </Stack>
        <Box
          position='relative'
          w='full'
          h='full'
          minH='sm'
          gridColumn={{ base: '1', md: '2', xl: '3 / span 3' }}
        >
          <Image src={seatingImg} alt='' fill style={{ objectFit: 'cover' }} />
        </Box>
      </SimpleGrid>
    </Container>
  );
};
export default SplitHero;
