// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import Comp1 from './USE CONTEXT/Comp1';
// import UseMemo from './Reducer/UseMemo/UseMemo';
// import UseRef from './UseRef/UseRef';
// import Reducer from './Reducer/Reducer';


export const userDetailsContext = React.createContext(null);

function App() {

  const [userDetails, setUserDetails] = useState({ Name: "Pakhi", Roll: "10" });


  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <UseRef /> */}

      {/* <UseMemo/> */}
      <userDetailsContext.Provider value={userDetails}>
        <Comp1 />
      </userDetailsContext.Provider>

    </div>
  );
}

export default App;
