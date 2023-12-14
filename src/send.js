import { useAccount } from 'wagmi'

import { SendTransaction } from './sendTransaction'

export function Send() {
    const { isConnected } = useAccount()

    if (isConnected) {
        return (
            <div>
                {/* Account content goes here */}
                <SendTransaction />
            </div>
        )
    }

    return <div>{/* Connect wallet content goes here */}</div>
}
