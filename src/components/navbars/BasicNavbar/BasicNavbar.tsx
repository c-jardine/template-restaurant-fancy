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
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import React from 'react';
import { NAV_ITEMS } from './BasicNavbar.config';
import { NavItem } from './BasicNavbar.types';

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
