import { useNetwork } from 'wagmi';

import { DEFAULT_CHAIN_ID } from '@/constant/env';

export default function useActiveChainId() {
  const { chain } = useNetwork();
  return chain?.id || DEFAULT_CHAIN_ID;
}
