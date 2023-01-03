import { Stack } from '@chakra-ui/react';
import { FoodMenu, MenuHero } from '../src/components/sections';

const Menu = () => {
  return (
    <Stack spacing={32} alignItems='center'>
      <MenuHero />
      <FoodMenu />
    </Stack>
  );
};

export default Menu;
