import { useState } from 'react'
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import Main from './MainTab.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
}
//   return (
//     <div className="app">
//       <div className="sidebar">Sidebar</div>
//       <div className="content">
//         <div className="header">Header</div>
//         <div className="main">
//           <div className="main-left">Main Left (70%)</div>
//           <div className="main-right">Main Right (30%)</div>
//         </div>
//       </div>
//     </div>
//   );
// }
  
  
  

export default App
