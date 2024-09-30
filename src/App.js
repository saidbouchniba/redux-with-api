import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashbord from './components/Dashbord';
import Adduser from './components/Adduser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getusers } from './Redux/Action';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getusers())
  },[])
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"100%",textAlign:"center",gap:"50px",marginTop:"5%",}} className="App">
      <Adduser/>
      <Dashbord />
      
    </div>
  );  
}

export default App;
