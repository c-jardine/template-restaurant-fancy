import { BasicHero, SplitHero } from '../src/components/heroes';
import { MosaicDetails, SimpleFeaturesGrid } from '../src/components/sections';

const Home = () => {
  return (
    <>
      <BasicHero />
      <SplitHero />
      <MosaicDetails />
      <SimpleFeaturesGrid />
    </>
  );
};

export default Home;
