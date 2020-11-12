import React from 'react';
import {Provider} from "react-redux";
import logo from './logo.svg';
// Component.
import GridComponent from "./components/Grid/GridComponent";
// Store.
import store from "./app_store/store";

function App() {
  return (
    <Provider store={store}> 
          <div>
            <GridComponent/>
          </div>
      </Provider>
  );
}

export default App;
