import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Estonia } from '@next/font/google';
import localFont from '@next/font/local';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import React from 'react';
import { NAV_ITEMS } from './BasicNavbar.config';
import { NavItem } from './BasicNavbar.types';

const proxima = localFont({ src: '../../../../public/fonts/ProximaNova.otf' });

const estonia = Estonia({ weight: '400' });

const Logo = () => {
  return (
    <Text
      className={estonia.className}
      lineHeight={0.5}
      fontSize='6xl'
      color='primary.500'
    >
      RB
    </Text>
  );
  // return (
  //   <svg
  //     id='logo-70'
  //     width='78'
  //     height='30'
  //     viewBox='0 0 78 30'
  //     fill='none'
  //     xmlns='http://www.w3.org/2000/svg'
  //   >
  //     <path
  //       d='M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z'
  //       className='ccustom'
  //       fill='#394149'
  //     ></path>
  //     <path
  //       d='M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z'
  //       className='ccustom'
  //       fill='#394149'
  //     ></path>
  //   </svg>
  // );
};

const BasicNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [scrollPos, setScrollPos] = React.useState<number>(0);
  const handleScroll = () => {
    const pos = window.scrollY;
    setScrollPos(pos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position='fixed'
      zIndex={100}
      w='full'
      bg={scrollPos <= 0 ? 'transparent' : 'blackAlpha.700'}
      backdropFilter={scrollPos <= 0 ? 'none' : 'blur(8px)'}
      transition='200ms ease-in-out'
    >
      <Flex
        // bg={useColorModeValue('white', 'gray.800')}'
        color={useColorModeValue('gray.600', 'white')}
        h={20}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom='1px'
        borderStyle={'solid'}
        borderColor='whiteAlpha.100'
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <MdClose width={3} height={3} />
              ) : (
                <FaBars width={5} height={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />

          <Flex
            display={{ base: 'none', md: 'flex' }}
            alignItems='center'
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            variant='outline'
            display={{ base: 'none', md: 'inline-flex' }}
            color='white'
            fontSize='xs'
            _hover={{
              bg: 'white',
              color: 'black',
            }}
          >
            Reserve your table
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box position='relative' p={2} role='group'>
                <Link
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight='normal'
                  textTransform='uppercase'
                  letterSpacing={1}
                  color='white'
                  _groupHover={{
                    textDecoration: 'none',
                    // color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
                <Box position='relative'>
                  <Box
                    position='absolute'
                    h={0.5}
                    w='50%'
                    bg='primary.600'
                    transform='scaleX(0%)'
                    transformOrigin='right'
                    _groupHover={{
                      transform: 'scale(100%)',
                    }}
                    transition='200ms ease-in-out'
                  />
                  <Box
                    position='absolute'
                    right={0}
                    h={0.5}
                    w='50%'
                    bg='primary.600'
                    transform='scaleX(0%)'
                    transformOrigin='left'
                    _groupHover={{
                      transform: 'scale(100%)',
                    }}
                    transition='200ms ease-in-out'
                  />
                </Box>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                bg='black'
                borderWidth={1}
                borderColor='gray.900'
                // p={4}
                rounded='none'
                minW={'sm'}
              >
                <Stack spacing={0}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={4}
      _hover={{ bg: 'whiteAlpha.100' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all 200ms ease'}
            color='white'
            textTransform='uppercase'
            letterSpacing={1}
            fontSize='sm'
            _groupHover={{ color: 'primary.500' }}
          >
            {label}
          </Text>
          <Text fontSize='sm' color='gray.400'>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all 200ms ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'primary.600'} w={3} h={3} as={FaChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={FaChevronDown}
            transition={'all 200ms ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={3}
            h={3}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0 !important' }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default BasicNavbar;
