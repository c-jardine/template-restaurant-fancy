import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import { NextPage } from 'next';
import { Location } from '../src/components/core';
import { ContactHero } from '../src/components/sections';

const serif = Cormorant_Garamond({ weight: '300' });

const TextInput = () => {
  return (
    <Input
      rounded='none'
      borderColor='whiteAlpha.300'
      _hover={{ borderColor: 'primary.500' }}
      _focus={{
        borderColor: 'primary.500',
        boxShadow: 'none !important',
      }}
    />
  );
};

const TextareaInput = () => {
  return (
    <Textarea
      rounded='none'
      borderColor='whiteAlpha.300'
      _hover={{ borderColor: 'primary.500' }}
      _focus={{
        borderColor: 'primary.500',
        boxShadow: 'none !important',
      }}
    />
  );
};

const ContactPage: NextPage = () => {
  return (
    <Stack spacing={28} alignItems='center'>
      <ContactHero />
      <Container maxW='7xl' w='full'>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} w='full'>
          <Box>
            <Location />
          </Box>
          <Box>
            <Text
              className={serif.className}
              fontSize='4xl'
              textTransform='uppercase'
              letterSpacing={1}
            >
              Talk to us
            </Text>
            <Stack spacing={6}>
              <FormControl>
                <FormLabel letterSpacing={0.5}>Name</FormLabel>
                <TextInput />
              </FormControl>
              <FormControl>
                <FormLabel letterSpacing={0.5}>Email</FormLabel>
                <TextInput />
              </FormControl>
              <FormControl>
                <FormLabel letterSpacing={0.5}>Phone Number</FormLabel>
                <TextInput />
              </FormControl>
              <FormControl>
                <FormLabel letterSpacing={0.5}>Message</FormLabel>
                <TextareaInput />
              </FormControl>
              <Button w='min'>Send Message</Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};
export default ContactPage;
