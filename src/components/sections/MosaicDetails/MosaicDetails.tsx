import {
  Box,
  Container,
  Show,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Estonia } from '@next/font/google';
import Image from 'next/image';
import chefImg from '../../../../public/images/chef-prep.jpg';
import meal1 from '../../../../public/images/meal-1.jpeg';
import meal2 from '../../../../public/images/meal-2.jpg';
import meal3 from '../../../../public/images/meal-3.jpg';
import { BlockLink } from '../../core';

const estonia = Estonia({ weight: '400' });

const MosaicDetails = () => {
  return (
    <Container maxW='1920px' w='full'>
      <Show below='md'>
        <Stack>
          <Box
            position='relative'
            gridColumn={{ base: '1', xl: '1 / span 2' }}
            minH='sm'
          >
            <Image src={chefImg} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <Stack spacing={4} p={12} justifyContent='center'>
            <Text className={estonia.className} fontSize='5xl' lineHeight={1}>
              Sit amet consectetur
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              at enim, consequuntur repellendus, molestiae.
            </Text>
            <BlockLink href='#'>Learn more</BlockLink>
          </Stack>
          <Box position='relative' minH='sm'>
            <Image src={meal1} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <Stack spacing={4} p={12} justifyContent='center'>
            <Text className={estonia.className} fontSize='5xl' lineHeight={1}>
              Neque deserunt suscipit
            </Text>
            <Text>
              Voluptatibus, accusantium culpa. Veritatis vitae, molestiae
              aperiam asperiores sint illo distinctio eius voluptates.
            </Text>
            <BlockLink href='#'>Learn more</BlockLink>
          </Stack>
          <Box position='relative' minH='sm'>
            <Image src={meal2} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <Stack spacing={4} p={12} justifyContent='center'>
            <Text className={estonia.className} fontSize='5xl' lineHeight={1}>
              Optio quasi atque
            </Text>
            <Text>
              Minus nostrum ex doloribus illum reiciendis sunt dolorum cumque
              quo, autem atque. Obcaecati corrupti numquam ad placeat.
            </Text>
            <BlockLink href='#'>Learn more</BlockLink>
          </Stack>
          <Box position='relative' minH='sm'>
            <Image src={meal3} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
        </Stack>
      </Show>
      <Show above='md'>
        <SimpleGrid columns={{ base: 1, xl: 5 }}>
          <Box
            position='relative'
            gridColumn={{ base: '1', xl: '1 / span 2' }}
            minH='container.sm'
          >
            <Image src={chefImg} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gridColumn={{ base: '1', xl: '3 / span 3' }}
          >
            <Box position='relative' w='full' h='full'>
              <Image src={meal1} alt='' fill style={{ objectFit: 'cover' }} />
            </Box>
            <Stack spacing={4} p={{ base: 4, md: 16 }} justifyContent='center'>
              <Text
                className={estonia.className}
                fontSize={{ base: '4xl', md: '6xl' }}
                lineHeight={1}
              >
                Sit amet consectetur
              </Text>
              <Text color='whiteAlpha.800'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti at enim, consequuntur repellendus, molestiae.
              </Text>
              <BlockLink href='#'>Learn more</BlockLink>
            </Stack>
            <Stack spacing={4} p={{ base: 4, md: 16 }} justifyContent='center'>
              <Text
                className={estonia.className}
                fontSize={{ base: '4xl', md: '6xl' }}
                lineHeight={1}
              >
                Neque deserunt suscipit
              </Text>
              <Text color='whiteAlpha.800'>
                Voluptatibus, accusantium culpa. Veritatis vitae, molestiae
                aperiam asperiores sint illo distinctio eius voluptates.
              </Text>
              <BlockLink href='#'>Learn more</BlockLink>
            </Stack>
            <Box position='relative' w='full' h='full'>
              <Image src={meal2} alt='' fill style={{ objectFit: 'cover' }} />
            </Box>
            <Box position='relative' w='full' h='full'>
              <Image src={meal3} alt='' fill style={{ objectFit: 'cover' }} />
            </Box>

            <Stack spacing={4} p={{ base: 4, md: 16 }} justifyContent='center'>
              <Text
                className={estonia.className}
                fontSize={{ base: '4xl', md: '6xl' }}
                lineHeight={1}
              >
                Optio quasi atque
              </Text>
              <Text color='whiteAlpha.800'>
                Minus nostrum ex doloribus illum reiciendis sunt dolorum cumque
                quo, autem atque. Obcaecati corrupti numquam ad placeat.
              </Text>
              <BlockLink href='#'>Learn more</BlockLink>
            </Stack>
          </SimpleGrid>
        </SimpleGrid>
      </Show>
    </Container>
  );
};
export default MosaicDetails;
