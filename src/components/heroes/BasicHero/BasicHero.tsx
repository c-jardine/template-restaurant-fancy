import { AbsoluteCenter, Box } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface BasicHeroProps {
  img: StaticImageData;
  height?: number | string;
  children: React.ReactNode;
}

const BasicHero = (props: BasicHeroProps) => {
  return (
    <Box position='relative' w='full' h={props.height || '100vh'}>
      <AbsoluteCenter w='full' h='full'>
        <Box position='relative' w='full' h='full'>
          <Image
            src={props.img}
            alt='Header image'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </AbsoluteCenter>
      <AbsoluteCenter w='full' h='full' bg='black' opacity={0.7} />
      <AbsoluteCenter
        display='flex'
        w='full'
        h='full'
        justifyContent='center'
        alignItems='center'
      >
        {props.children}
      </AbsoluteCenter>
    </Box>
  );
};
export default BasicHero;
