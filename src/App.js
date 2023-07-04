import React from 'react';

import Navbars from './components/Navbars';
import Settings from './components/Settings';
import SupportChat from './components/SupportChat';


const App = () => {


  return (
    <>
      <main className="main" id="top">
        <Navbars />
        {/* Render các thành phần mặc định */}
        <SupportChat  />
      </main>
      <Settings />

    </>
  );
};

export default App;
