import { Box, Divider, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Estonia } from '@next/font/google';
import Image from 'next/image';
import riverImg from '../../../../public/images/river.jpg';
import { SplitHero } from '../../heroes';

const estonia = Estonia({ weight: '400' });

const Footer = () => {
  return (
    <Box mt={32}>
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
    </Box>
  );
};

export default Footer;
