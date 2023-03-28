import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Box textAlign={{ base: 'left', md: 'center' }} fontWeight="bold" flexGrow={1}>
          Registration
        </Box>
        <Stack direction={'row'} spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
