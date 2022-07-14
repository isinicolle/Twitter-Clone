import React from 'react';
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Widgets from './layout/Widgets';

function App() {
  return (
    <Container> 
    
        <Sidebar>
          <Container>
             <Widgets>
              
             </Widgets>
          </Container>
        </Sidebar>

      </Container> 
  );
}

export default App;
