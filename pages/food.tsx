import { Stack } from '@chakra-ui/react';
import { FoodHero, FoodMenu } from '../src/components/sections';

const Menu = () => {
  return (
    <Stack spacing={32} alignItems='center'>
      <FoodHero />
      <FoodMenu />
    </Stack>
  );
};

export default Menu;
