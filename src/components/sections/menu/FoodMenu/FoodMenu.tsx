import {
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Estonia } from '@next/font/google';
import {
  Appetizers,
  Entrees,
  LighterFare,
  Sides,
  Specialty,
} from './FoodMenu.config';
import {
  CategoryHeaderProps,
  FoodMenuItemProps,
  FoodMenuItemsProps,
} from './FoodMenu.types';

const estonia = Estonia({ weight: '400' });

const CategoryHeader = (props: CategoryHeaderProps) => {
  return (
    <Stack color='primary.500'>
      <Divider />
      <Text
        className={estonia.className}
        textTransform='uppercase'
        fontSize='4xl'
        textAlign='center'
      >
        {props.children}
      </Text>
      <Divider />
    </Stack>
  );
};

const MenuSection = (props: FoodMenuItemsProps) => {
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

const MenuItem = (props: FoodMenuItemProps) => {
  return (
    <HStack key={props.name} alignItems='flex-start'>
      <Stack flexGrow={1}>
        <Text className={estonia.className} fontSize='4xl' lineHeight={0.75}>
          {props.name}
        </Text>
        <Text color='whiteAlpha.700'>{props.description}</Text>
      </Stack>
      <Text pt={1} color='primary.500' fontWeight='semibold'>
        {props.price}
      </Text>
    </HStack>
  );
};

const FoodMenu = () => {
  return (
    <Container maxW='7xl' w='full'>
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap={16}>
        <VStack spacing={16}>
          <MenuSection {...Appetizers} />
          <MenuSection {...Sides} />
        </VStack>
        <VStack spacing={16}>
          <MenuSection {...Specialty} />
          <MenuSection {...LighterFare} />
        </VStack>
        <VStack spacing={16}>
          <MenuSection {...Entrees} />
        </VStack>
      </SimpleGrid>
    </Container>
  );
};
export default FoodMenu;
