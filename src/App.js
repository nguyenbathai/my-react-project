import './App.css';
import ConnectButton from "./button";
import Web3Modal from "./component";
import {Send} from "./send";


function App() {
  return (
    <div className="App">
        <ConnectButton></ConnectButton>
        <Web3Modal/>
    </div>
  );
}

export default App;
