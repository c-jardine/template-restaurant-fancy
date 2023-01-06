import { Divider, HStack, Icon } from '@chakra-ui/react';
import { GiKnifeFork } from '@react-icons/all-files/gi/GiKnifeFork';

const IconDivider = () => {
  return (
    <HStack w='full' justifyContent='center' alignItems='center'>
      <Divider
        borderBottomWidth={2}
        color='primary.500'
        maxW={16}
        opacity={1}
      />
      <Icon as={GiKnifeFork} w={6} h={6} />
      <Divider
        borderBottomWidth={2}
        color='primary.500'
        maxW={16}
        opacity={1}
      />
    </HStack>
  );
};
export default IconDivider;
