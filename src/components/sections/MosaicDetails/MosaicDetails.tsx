import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import { BlockLink } from '../../core';

const serif = Cormorant_Garamond({ weight: '300' });

const MosaicDetails = () => {
  return (
    <Box maxW='8xl' w='full'>
      <SimpleGrid columns={{ base: 1, xl: 5 }}>
        <Box
          gridColumn={{ base: '1', xl: '1 / span 2' }}
          // minH='sm'
          backgroundImage='https://unsplash.com/photos/eBmyH7oO5wY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNjIyMjk1&force=true&w=1920'
          backgroundSize='cover'
          backgroundPosition='center'
        />
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gridColumn={{ base: '1', xl: '3 / span 3' }}
        >
          <Box
            w='full'
            // minH={{xl: 'sm'}}
            h='full'
            backgroundImage='https://unsplash.com/photos/fdlZBWIP0aM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNjE2Nzgw&force=true&w=1920'
            backgroundSize='cover'
            backgroundPosition='center'
          />
          <Stack
            bg='white'
            color='black'
            spacing={4}
            px={{ base: 4, md: 8 }}
            py={{ base: 4, md: 8, xl: 16 }}
            justifyContent='center'
          >
            <Text className={serif.className} fontSize='4xl' lineHeight={1}>
              Sit amet consectetur
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              at enim, consequuntur repellendus, molestiae.
            </Text>
            <BlockLink href='#' dark>
              Learn more
            </BlockLink>
          </Stack>
          <Stack
            bg='white'
            color='black'
            spacing={4}
            px={{ base: 4, md: 8 }}
            py={{ base: 4, md: 8, xl: 16 }}
            justifyContent='center'
          >
            <Text className={serif.className} fontSize='4xl' lineHeight={1}>
              Neque deserunt suscipit
            </Text>
            <Text>
              Voluptatibus, accusantium culpa. Veritatis vitae, molestiae
              aperiam asperiores sint illo distinctio eius voluptates.
            </Text>
            <BlockLink href='#' dark>
              Learn more
            </BlockLink>
          </Stack>
          <Box
            w='full'
            h='full'
            // minH='sm'
            backgroundImage='https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
            backgroundSize='cover'
            backgroundPosition='center'
          />
          <Box
            w='full'
            h='full'
            // minH='sm'
            backgroundImage='https://unsplash.com/photos/N_Y88TWmGwA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNjEwMDM0&force=true&w=1920'
            backgroundSize='cover'
            backgroundPosition='center'
          />

          <Stack
            bg='white'
            color='black'
            spacing={4}
            px={{ base: 4, md: 8 }}
            py={{ base: 4, md: 8, xl: 16 }}
            justifyContent='center'
          >
            <Text className={serif.className} fontSize='4xl' lineHeight={1}>
              Optio quasi atque
            </Text>
            <Text>
              Minus nostrum ex doloribus illum reiciendis sunt dolorum cumque
              quo, autem atque. Obcaecati corrupti numquam ad placeat.
            </Text>
            <BlockLink href='#' dark>
              Learn more
            </BlockLink>
          </Stack>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};
export default MosaicDetails;
