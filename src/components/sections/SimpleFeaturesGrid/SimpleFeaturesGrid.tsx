import { Box, Container, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import { BlockLink } from '../../core';

const SimpleFeaturesGrid = () => {
  return (
    <Box py={28}>
      <Container maxW='7xl' w='full'>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={8}>
          <Stack alignItems='center'>
            <Image
              src='https://unsplash.com/photos/KO46ZfbNdtY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Zm9vZCUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNjcyNjAyMTA4&force=true&w=1920'
              alt=''
              w='full'
              maxH='container.sm'
              h='full'
              objectFit='cover'
            />
            <BlockLink href='#'>Food Menu</BlockLink>
          </Stack>
          <Stack alignItems='center'>
            <Image
              src='https://unsplash.com/photos/QYWYnzvPTAQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNjI4MDYw&force=true&w=1920'
              alt=''
              w='full'
              maxH='container.sm'
              h='full'
              objectFit='cover'
            />
            <BlockLink href='#'>Drink Menu</BlockLink>
          </Stack>
          <Stack alignItems='center'>
            <Image
              src='https://unsplash.com/photos/_BUlk40NTNU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8ZGVzc2VydHMlMjByZXN0YXVyYW50fGVufDB8fHx8MTY3MjYyODA4Nw&force=true&w=1920'
              alt=''
              w='full'
              maxH='container.sm'
              h='full'
              objectFit='cover'
            />
            <BlockLink href='#'>Desserts</BlockLink>
          </Stack>
          <Stack alignItems='center'>
            <Image
              src='https://unsplash.com/photos/7RVP-1-ZbOU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fHJlc3RhdXJhbnQlMjBzcGVjaWFsc3xlbnwwfHx8fDE2NzI2MjgxMzQ&force=true&w=1920'
              alt=''
              w='full'
              maxH='container.sm'
              h='full'
              objectFit='cover'
            />
            <BlockLink href='#'>Specials</BlockLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default SimpleFeaturesGrid;
