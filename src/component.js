import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import {arbitrum, baseGoerli, mainnet} from 'viem/chains'
import {Profile} from "./wallet";
import {Send} from "./send";
import ReadContact from "./readContact";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd7ba718612de445bd528f93351d24fc1'

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet,arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function Web3Modal() {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <Profile/>
                <Send/>
                <ReadContact/>
            </WagmiConfig>
        </>


    )
}
