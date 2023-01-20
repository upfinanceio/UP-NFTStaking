import { tokenContract as bep20 } from 'contracts/token/tokenContract';
import { useContractReads } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

export default function useToken(token) {
  const chainId = useActiveChainId();
  const contractInfo = {
    address: token,
    abi: bep20[chainId].abi,
  };

  const { data } = useContractReads({
    contracts: [
      {
        ...contractInfo,
        functionName: 'symbol',
      },
      {
        ...contractInfo,
        functionName: 'decimals',
      },
    ],
  });

  if (!data) {
    return { 
      symbol: null, 
      decimals: null 
    };
  }
  return {
    symbol: data[0],
    decimals: data[1],
  };
}
