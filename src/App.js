import { Route, Routes} from 'react-router-dom'
import Layout from './components/layout'
import Profile from './components/profile';
import Calendar from './components/calendar';
import Salary from './components/salary';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/salary' element={<Salary />} />
      </Route>
    </Routes>
  );
}

export default App;
