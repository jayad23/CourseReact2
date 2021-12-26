import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Views/Home';
import Personal from './Views/Personal'
import Quotes from './Views/Quotes';
import Todos from './Views/Todos'
import Cards from './Views/Alternate Views/Cards'

import { RehearsalContextProvider } from './Context/Rehearsal'

function App() {
  return (
    <BrowserRouter>
      <RehearsalContextProvider>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/personal" element={<Personal/>}/>
            <Route exact path="/cards" element={<Cards/>}/>
          <Route exact path="/quotes" element={<Quotes/>}/>
          <Route exact path="/jsonplaceholder" element={<Todos/>}/>
        </Routes>
      </RehearsalContextProvider>
    </BrowserRouter>
  );
}

export default App;