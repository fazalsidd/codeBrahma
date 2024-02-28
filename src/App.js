import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useToggle from "./useToggle";
import useEscape from './useEscape';

function App() {
  const [isToggledMain, toggleMain] = useToggle(false);
  const { isToggleEscape, toggleEscape } = useEscape(false);
  
  return (
    <div className="app">
      <h1>My Toggle Box</h1>
      <button onClick={toggleMain}>{isToggledMain ? 'Hide Box' : 'Show Box'}</button>
      <button onClick={toggleMain}>{isToggledMain ? 'Hide Box' : 'Show Box'}</button>
      {isToggledMain && <div className="box">This is My box</div>}
    </div>
  );
}
export default App;
