import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BlockLink } from '../src/components/core';
import { BasicHero, SplitHero } from '../src/components/heroes';
import {
  HomeHero,
  MosaicDetails,
  SimpleFeaturesGrid,
} from '../src/components/sections';
import { Cormorant_Garamond, Estonia } from '@next/font/google';
import Image from 'next/image';
import seatingImg from '../public/images/seating.jpg';
import riverImg from '../public/images/river.jpg';

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
      <SplitHero
        flip
        leftContent={
          <Stack spacing={16}>
            <Divider color='primary.500' />
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              gap={8}
              letterSpacing={1}
              textTransform='uppercase'
            >
              <Stack>
                <Text
                  className={estonia.className}
                  fontSize='4xl'
                  fontWeight='bold'
                  color='primary.500'
                >
                  Current Hours
                </Text>
                <Stack spacing={0}>
                  <Text>Sunday - Thursday</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    11am - 8pm
                  </Text>
                </Stack>
                <Stack spacing={0}>
                  <Text>Friday - Saturday</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    11am - 12am
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Text
                  className={estonia.className}
                  fontSize='4xl'
                  fontWeight='bold'
                  color='primary.500'
                >
                  Address
                </Text>
                <Stack spacing={0}>
                  <Text>123 Main St. Toledo, OH 43604</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    Free parking on weekdays
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Text
                  className={estonia.className}
                  fontSize='4xl'
                  fontWeight='bold'
                  color='primary.500'
                >
                  Reservations
                </Text>
                <Stack spacing={0}>
                  <Text>Phone</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    (567) 555-1234
                  </Text>
                </Stack>
                <Stack spacing={0}>
                  <Text>Email</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    book@riversidebistro.com
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Text
                  className={estonia.className}
                  fontSize='4xl'
                  fontWeight='bold'
                  color='primary.500'
                >
                  Dining
                </Text>
                <Stack spacing={0}>
                  <Text>Inside</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    Spacious interior with tables and booths
                  </Text>
                </Stack>
                <Stack spacing={0}>
                  <Text>Outside</Text>
                  <Text
                    color='whiteAlpha.700'
                    textTransform='none'
                    letterSpacing={0}
                  >
                    Beautiful riverfront view with heated patio
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
            <Divider color='primary.500' />
          </Stack>
        }
        rightContent={
          <Box position='relative' w='full' h='full' minH='sm'>
            <Image src={riverImg} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
        }
      />
    </Stack>
  );
};

export default Home;
