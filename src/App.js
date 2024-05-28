import './App.css';
import LeaderBord from './LeaderBord';
import Navbar from './Navbar';

function App() {
  return (
    <div className="m-0 p-0 w-full h-full border-4 border-green-600">
       <Navbar/>
       <LeaderBord/>
    </div>
  );
}

export default App;
