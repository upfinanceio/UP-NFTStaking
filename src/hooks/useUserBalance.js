import { tokenContract as bep20 } from 'contracts/token/tokenContract';
import { useAccount, useContractRead } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

export default function useUserBalance(token) {
  const chainId = useActiveChainId();
  const { address: account } = useAccount();

  const contractInfo = {
    address: token,
    abi: bep20[chainId].abi,
  };

  const { data } = useContractRead({
    ...contractInfo,
    functionName: `balanceOf`,
    args: [account],
  });

  return data || 0;
}
