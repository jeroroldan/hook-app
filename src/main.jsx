import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { HooksApp } from './HooksApp'

import './index.css';
import MainApp from './useContext/MainApp';
// import CallBackHook from './memos/CallBackHook';
// import { Father } from './memos/Father';
// import MemoHook from './memos/MemoHook';
// import Memorize from './memos/Memorize';
// import { Layout } from './useLayoutEffect/Layout';
// import CounterApp from './useState/CounterApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import {  SimpleForm } from './useEffect/SimpleForm';
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
// import FocusScreeen from './useRef/FoucusScreen';
// import TodoApp from './useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>  */}
  </BrowserRouter>
)


// sfc