import { Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import heroImg from '../../../../../public/images/meal-2.jpg';
import { IconDivider } from '../../../core';
import { BasicHero } from '../../../heroes';

const serif = Cormorant_Garamond({ weight: '300' });

const FoodHero = () => {
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
          Food Menu
        </Text>
        <IconDivider />
        <Text>We have something for everyone</Text>
      </Stack>
    </BasicHero>
  );
};
export default FoodHero;
