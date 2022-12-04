import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import PageLayout from './components/page-layout';
import ContainLayout from './components/page-layout/container';

function App() {
  return (
    <Box>
      <PageLayout>
        <ContainLayout>
          <Home/>
        </ContainLayout>
      </PageLayout>
    </Box>
  );
}

export default App;
