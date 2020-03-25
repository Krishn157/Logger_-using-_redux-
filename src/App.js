import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './Components/Layouts/SearchBar';
import Logs from './Components/logs/Logs';
import AddBtn from './Components/Layouts/AddBtn';
import AddLogModal from './Components/logs/AddLogModal';
import EditLogModal from './Components/logs/EditLogModal';
import AddTechModal from './Components/techs/AddTechModal';
import TechListModal from './Components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  useEffect(() => {
    //Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
