import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Sign from './pages/Sign';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"/sign"} element={<Sign />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
