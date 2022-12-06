import { useSwitchNetwork } from 'wagmi';

import AnimatedButton from '@/components/buttons/AnimatedButton';

import BscLogo from '@/assets/img/bnb-bnb-logo.svg';

export default function SwitchNetworkButton() {
  const { switchNetwork } = useSwitchNetwork();

  return (
    <AnimatedButton
      title='Switch Network'
      backgroundColor='bg-yellow-500/10'
      icon={<BscLogo />}
      onClick={() => {
        if (switchNetwork) {
          switchNetwork(56);
        }
      }}
    />
  );
}
