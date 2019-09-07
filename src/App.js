import React, { useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import "./App.css";
import SeachBar from './component/layout/SearchBar';
import Logs from './component/logs/Logs';
import AddBtn from './component/layout/AddBtn';
import AddLogModal from './component/logs/AddLogModal'
import EditLogModal from './component/logs/EditLogModal';
import AddTechModal from './component/techs/TechModal'
import TechListModal from './component/techs/TechListModal';

import  {Provider} from 'react-redux';
import store from '../src/store';
const App=()=> {
  useEffect(()=>{
    M.AutoInit();
  }

  )
  return (
    <Provider store={store}>
      <Fragment>
        <SeachBar />
        <div className="container">
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
