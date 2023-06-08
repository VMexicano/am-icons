import React, { useState } from 'react';
import './App.css';
import Icons from './Icons';

function App() {
       const [activeSection, setActiveSection] = useState('Glyphs');
       return (

              <div className="App">
                     <div>
                            <button onClick={ () => setActiveSection(activeSection === 'IconFonts' ? 'Glyphs' : "IconFonts") }>{ activeSection }</button>
                     </div>
                     <h1>React Icons</h1>
                     { activeSection === 'Glyphs' ? <Icons /> : <div>Icon Fonts</div> }

              </div>
       );
}
export default App;
