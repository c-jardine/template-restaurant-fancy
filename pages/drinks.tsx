import { Stack } from '@chakra-ui/react';
import { DrinkMenu, DrinksHero } from '../src/components/sections';

const Menu = () => {
  return (
    <Stack spacing={32} alignItems='center'>
      <DrinksHero />
      <DrinkMenu />
    </Stack>
  );
};

export default Menu;
