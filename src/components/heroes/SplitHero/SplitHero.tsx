import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { SplitHeroProps } from './SplitHero.types';

const SplitHero = (props: SplitHeroProps) => {
  return (
    <Container maxW='7xl' w='full'>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 5 }}
        gap={16}
        alignItems='center'
      >
        {!props.flip ? (
          <>
            <Box
              gridColumn={{ base: '1', md: '1', xl: '1 / span 2' }}
              w='full'
              h='full'
            >
              {props.leftContent}
            </Box>
            <Box
              gridColumn={{ base: '1', md: '2', xl: '3 / span 3' }}
              w='full'
              h='full'
            >
              {props.rightContent}
            </Box>
          </>
        ) : (
          <>
            <Box
              gridColumn={{ base: '1', md: '1', xl: '1 / span 3' }}
              w='full'
              h='full'
            >
              {props.leftContent}
            </Box>
            <Box
              gridColumn={{ base: '1', md: '2', xl: '4 / span 2' }}
              w='full'
              h='full'
            >
              {props.rightContent}
            </Box>
          </>
        )}
      </SimpleGrid>
    </Container>
  );
};
export default SplitHero;
