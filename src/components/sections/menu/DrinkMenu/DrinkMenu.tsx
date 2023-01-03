import {
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Cormorant_Garamond } from '@next/font/google';
import { CategoryHeaderProps } from '../Menu.types';
import {
  BottledBeer,
  Cocktails,
  CraftBeer,
  OnTapBeer,
} from './DrinkMenu.config';
import { DrinkMenuItemProps, DrinkMenuItemsProps } from './DrinkMenu.types';

const serif = Cormorant_Garamond({ weight: '300' });

const CategoryHeader = (props: CategoryHeaderProps) => {
  return (
    <Stack color='primary.500'>
      <Divider />
      <Text
        className={serif.className}
        textTransform='uppercase'
        fontSize='2xl'
        textAlign='center'
      >
        {props.children}
      </Text>
      <Divider />
    </Stack>
  );
};

const MenuSection = (props: DrinkMenuItemsProps) => {
  return (
    <Stack spacing={6} w='full'>
      <CategoryHeader>{props.category}</CategoryHeader>
      <Stack spacing={6}>
        {props.items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

const MenuItem = (props: DrinkMenuItemProps) => {
  return (
    <HStack key={props.name} alignItems='flex-start'>
      <Stack flexGrow={1} justifyContent='center'>
        <Text className={serif.className} fontSize='xl' lineHeight={1}>
          {props.name}
        </Text>
        {props.description && (
          <Text color='whiteAlpha.700'>{props.description}</Text>
        )}
      </Stack>
      <Text color='primary.500' fontWeight='semibold'>
        {props.price}
      </Text>
    </HStack>
  );
};

const DrinkMenu = () => {
  return (
    <Container id='drinks' scrollMarginTop={24} maxW='7xl' w='full'>
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap={16}>
        <VStack spacing={16}>
          <MenuSection {...OnTapBeer} />
          <MenuSection {...BottledBeer} />
        </VStack>
        <VStack spacing={16}>
          <MenuSection {...CraftBeer} />
        </VStack>
        <VStack spacing={16}>
          <MenuSection {...Cocktails} />
        </VStack>
      </SimpleGrid>
    </Container>
  );
};
export default DrinkMenu;
