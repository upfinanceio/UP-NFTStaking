import { stakingContract } from 'contracts/stakingContract';
import { useContractReads } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

export default function usePoolInfo() {
  const chainId = useActiveChainId();

  const contractInfo = {
    address: stakingContract[chainId].address,
    abi: stakingContract[chainId].abi,
  };

  const { data } = useContractReads({
    contracts: [
      {
        ...contractInfo,
        functionName: 'getRewardTokens',
        watch: true,
      },
      {
        ...contractInfo,
        functionName: 'feeToken',
      },
      {
        ...contractInfo,
        functionName: 'feeAmount',
      },
    ],
  });

  if (!data) {
    return {
      rewardTokens: [],
      feeToken: null,
      feeAmount: 0,
    };
  }
  return {
    rewardTokens: data[0] || [],
    feeToken: data[1],
    feeAmount: data[2] || 0,
  };
}
