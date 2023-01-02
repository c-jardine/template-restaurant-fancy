import { Stack } from '@chakra-ui/react';
import { BasicHero, SplitHero } from '../src/components/heroes';
import { MosaicDetails, SimpleFeaturesGrid } from '../src/components/sections';

const Home = () => {
  return (
    <Stack spacing={32} alignItems='center'>
      <BasicHero />
      <SplitHero />
      <MosaicDetails />
      <SimpleFeaturesGrid />
    </Stack>
  );
};

export default Home;
