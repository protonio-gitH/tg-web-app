import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  const {onToggleButton,tg} = useTelegram();  

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className='App'>
        <Routes>
            <Route index element={<Form/>}/>
            <Route path={'admin'} element={<AdminPanel/>}/>
        </Routes>
    </div>
  );
}

export default App;
