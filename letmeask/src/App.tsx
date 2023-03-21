import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { NewRoom } from "./pages/NewRoom";

import { Home  } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="rooms/new" Component={NewRoom}/>
      </Routes>

    </BrowserRouter>    
  );
}
export default App;
