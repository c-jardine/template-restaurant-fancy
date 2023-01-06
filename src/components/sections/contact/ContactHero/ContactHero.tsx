import { Divider, Stack, Text } from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import heroImg from '../../../../../public/images/meal-2.jpg';
import { BasicHero } from '../../../heroes';

const serif = Cormorant_Garamond({ weight: '300' });

const ContactHero = () => {
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
          Contact Us
        </Text>
        <Divider borderBottomWidth={2} color='primary.500' maxW={32} />
        <Text>Get in touch with the restaurant</Text>
      </Stack>
    </BasicHero>
  );
};
export default ContactHero;
