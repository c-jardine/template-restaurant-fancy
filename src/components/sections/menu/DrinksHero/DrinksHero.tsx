import { Divider, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import heroImg from '../../../../../public/images/bar.jpg';
import { BasicHero } from '../../../heroes';

const serif = Cormorant_Garamond({ weight: '300' });

const DrinksHero = () => {
  return (
    <BasicHero img={heroImg} height='50vh'>
      <Stack mt={16} alignItems='center' spacing={8}>
        <Text
          className={serif.className}
          as='h1'
          fontSize='4xl'
          textTransform='uppercase'
          lineHeight={0.85}
        >
          Drink Menu
        </Text>
        <Divider borderBottomWidth={2} color='primary.500' maxW={32} />
        <Text>Mixing up happiness</Text>
      </Stack>
    </BasicHero>
  );
};
export default DrinksHero;
