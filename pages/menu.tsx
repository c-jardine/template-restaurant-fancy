import { Divider, Stack, Text } from '@chakra-ui/react';
import { BasicHero } from '../src/components/heroes';
import heroImg from '../public/images/meal-1.jpeg';
import { Estonia } from '@next/font/google';

const estonia = Estonia({ weight: '400' });

const Menu = () => {
  return (
    <Stack spacing={32} alignItems='center'>
      <BasicHero img={heroImg} height='50vh'>
        <Stack mt={16} alignItems='center' spacing={8}>
          <Text
            className={estonia.className}
            as='h1'
            fontSize={{ base: '4xl', md: '6xl' }}
            textTransform='uppercase'
            lineHeight={0.85}
          >
            View our menus
          </Text>
          <Divider borderBottomWidth={2} color='primary.500' maxW={32} />
          <Text>We have something for everyone</Text>
        </Stack>
      </BasicHero>
    </Stack>
  );
};

export default Menu;
