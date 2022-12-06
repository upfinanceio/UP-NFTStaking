import { ConnectKitButton } from 'connectkit';
import { SlWallet } from 'react-icons/sl';

import AnimatedButton from '@/components/buttons/AnimatedButton';
import SwitchNetworkButton from '@/components/buttons/SwitchNetworkButton';

export function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, unsupported }) => {
        return (
          <>
            {unsupported ? (
              <SwitchNetworkButton />
            ) : (
              <AnimatedButton
                title={
                  isConnected
                    ? `${address?.slice(0, 4)}...${address?.slice(-3)}`
                    : `Connect`
                }
                backgroundColor='bg-yellow-500/10'
                icon={<SlWallet color='white' />}
                onClick={show}
              />
            )}
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
}

export default ConnectButton;
