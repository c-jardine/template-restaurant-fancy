import { Box, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import { NextPage } from 'next';
import Image from 'next/image';
import barImg from '../public/images/bar-header.jpg';
import foodImg from '../public/images/chef-prep.jpg';
import seatingImg from '../public/images/seating.jpg';
import { BlockLink } from '../src/components/core';
import { SplitHero } from '../src/components/heroes';
import { AboutHero } from '../src/components/sections';

const serif = Cormorant_Garamond({ weight: '300' });

const AboutPage: NextPage = () => {
  return (
    <Stack spacing={28} alignItems='center'>
      <AboutHero />
      <SplitHero
        flip
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
              className={serif.className}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={0.95}
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

      <SplitHero
        flip
        leftContent={
          <HStack spacing={4}>
            <Box position='relative' w='full' minH='sm' h='full'>
              <Image
                src={foodImg}
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box position='relative' w='full' h='full' minH='sm'>
              <Image src={barImg} alt='' fill style={{ objectFit: 'cover' }} />
            </Box>
          </HStack>
        }
        rightContent={
          <Stack spacing={6} py={{ base: 0, md: 16 }}>
            <HStack w='full' alignItems='center'>
              <Text
                fontWeight='semibold'
                textTransform='uppercase'
                color='primary.500'
                whiteSpace='nowrap'
              >
                The mission
              </Text>
              <Divider color='primary.500' borderBottomWidth={2} />
            </HStack>
            <Text
              className={serif.className}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={0.95}
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
            <HStack spacing={8}>
              <BlockLink href='#'>Food Menu</BlockLink>
              <BlockLink href='#'>Drink Menu</BlockLink>
            </HStack>
          </Stack>
        }
      />

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
                Only fresh ingredients
              </Text>
              <Divider color='primary.500' borderBottomWidth={2} />
            </HStack>
            <Text
              className={serif.className}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={0.95}
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
    </Stack>
  );
};
export default AboutPage;
