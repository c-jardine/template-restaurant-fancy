import { Box, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond, Estonia } from '@next/font/google';
import Image from 'next/image';
import seatingImg from '../public/images/seating.jpg';
import { BlockLink } from '../src/components/core';
import { SplitHero } from '../src/components/heroes';
import {
  HomeHero,
  MosaicDetails,
  SimpleFeaturesGrid,
} from '../src/components/sections';

const serif = Cormorant_Garamond({ weight: '300' });
const estonia = Estonia({ weight: '400' });

const Home = () => {
  return (
    <Stack spacing={32} alignItems='center'>
      <HomeHero />
      <SplitHero
        leftContent={
          <Stack spacing={6} py={{ base: 0, md: 16 }}>
            <HStack w='full' alignItems='center'>
              <Text
                fontWeight='semibold'
                textTransform='uppercase'
                color='primary.500'
                whiteSpace='nowrap'
              >
                Our Story
              </Text>
              <Divider color='primary.500' borderBottomWidth={2} />
            </HStack>
            <Text
              className={estonia.className}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={0.75}
              letterSpacing={2}
            >
              Labore cupiditate voluptatem rerum facere
            </Text>
            <Text letterSpacing={0.5} lineHeight={1.75} color='whiteAlpha.800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              officiis labore cupiditate voluptatem rerum facere, mollitia,
              laborum nesciunt soluta ad tempore recusandae inventore excepturi
              cumque eveniet commodi officia quas voluptate!
            </Text>
            <BlockLink href='#'>Learn more</BlockLink>
          </Stack>
        }
        rightContent={
          <Box position='relative' w='full' h='full' minH='sm'>
            <Image
              src={seatingImg}
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        }
      />
      <MosaicDetails />
      <SimpleFeaturesGrid />
    </Stack>
  );
};

export default Home;
