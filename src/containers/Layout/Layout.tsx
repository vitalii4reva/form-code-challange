import { Container } from '@chakra-ui/react';

import NavBar from '../../components/NavBar/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Container
        maxW={{
          base: '100%',
          xl: '5xl',
          lg: '600px',
          md: '600px',
          sm: '600px',
        }}
        px={{ base: 4, sm: 0 }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
