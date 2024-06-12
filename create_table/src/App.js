import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./Pages/Table";
import Home from "./Pages/Home";


function App() {
  return (
    <>
     <div className="App container">
      <h1 className='ml-3 '>React Table </h1>
      {/* <TableSearch /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='add_table' element={<Table />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
