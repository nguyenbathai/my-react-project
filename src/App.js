import logo from './logo.svg';
import './App.css';
import ConnectButton from "./button";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'
import Web3Modal from "./_app";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd7ba718612de445bd528f93351d24fc1'

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <div className="App">
      <ConnectButton></ConnectButton>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <WagmiConfig config={wagmiConfig}>
              <Component {...pageProps} />
          </WagmiConfig>
          <Web3Modal
            projectId={projectId}
            theme={"dark"}
          />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
