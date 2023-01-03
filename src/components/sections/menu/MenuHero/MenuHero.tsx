import { Stack, Divider, Text } from '@chakra-ui/react';
import { BasicHero } from '../../../heroes';
import heroImg from '../../../../../public/images/meal-2.jpg';
import { Estonia } from '@next/font/google';

const estonia = Estonia({ weight: '400' });

const MenuHero = () => {
  return (
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
  );
};
export default MenuHero;
