import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Actives from './pages/other/Actives';
import Applications from './pages/other/Applications';
import Clients from './pages/other/Clients';
import Base from './pages/other/Base';
import Team from './pages/other/Team';
import Settings from './pages/other/Settings';
import { Path } from './constant';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { useEffect } from 'react';
import { getPrioritiesWithThunk, getStatusesWithThunk } from './store/task/taskSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getPrioritiesWithThunk());
    dispatch(getStatusesWithThunk());
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* как вариант, м.б. сделать 1 страницу, переключающую заголовок в зависимости от url */}
            <Route path={Path.Actives} element={<Actives />} />
            <Route path={Path.Applications} element={<Applications />} />
            <Route path={Path.Base} element={<Base />} />
            <Route path={Path.Clients} element={<Clients />} />
            <Route path={Path.Settings} element={<Settings />} />
            <Route path={Path.Team} element={<Team />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
