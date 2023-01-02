import { Container, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import { BlockLink } from '../../core';

const serif = Cormorant_Garamond({ weight: '300' });

const SplitHero = () => {
  return (
    <Container py={28} maxW='7xl' w='full'>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 5 }}
        gap={16}
        alignItems='center'
      >
        <Stack
          gridColumn={{ base: '1', md: '1', xl: '1 / span 2' }}
          spacing={6}
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
            fontSize='6xl'
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
        <Image
          src='https://unsplash.com/photos/ZgREXhl8ER0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNjE2NzAw&force=true&w=1920'
          alt=''
          h='75vh'
          w='full'
          objectFit='cover'
          objectPosition='bottom'
          gridColumn={{ base: '1', md: '2', xl: '3 / span 3' }}
        />
      </SimpleGrid>
    </Container>
  );
};
export default SplitHero;
