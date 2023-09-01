import React, { useEffect } from 'react';

import Navbars from './components/Navbars';
import Settings from './components/Settings';
import SupportChat from './components/SupportChat';
import { useDispatch, useSelector } from 'react-redux';
import NotificationHeader from './components/Header/NotificationHeader';


const App = () => {

  return (
    <>
      <main className="main" id="top">
        <Navbars />
        <div className="content">
          <NotificationHeader />
        </div>
        {/* Render các thành phần mặc định */}
        <SupportChat />
      </main>
      <Settings />

    </>
  );
};

export default App;
