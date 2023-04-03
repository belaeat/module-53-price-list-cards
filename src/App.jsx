import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList> 
      <Dashboard></Dashboard> 
      <PhoneBar></PhoneBar> 
    </div>
  )
}

export default App
