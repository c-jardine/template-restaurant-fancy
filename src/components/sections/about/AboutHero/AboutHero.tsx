import { Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import heroImg from '../../../../../public/images/front-of-house.jpg';
import { IconDivider } from '../../../core';
import { BasicHero } from '../../../heroes';

const serif = Cormorant_Garamond({ weight: '300' });

const AboutHero = () => {
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
          About Us
        </Text>
        <IconDivider />
        <Text>Lorem ipsum dolor sit, amet consectetur</Text>
      </Stack>
    </BasicHero>
  );
};
export default AboutHero;
