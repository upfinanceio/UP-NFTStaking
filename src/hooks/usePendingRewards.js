import { stakingContract } from 'contracts/stakingContract';
import { useContractReads } from 'wagmi';

import useActiveChainId from './useActiveChainId';

export default function usePendingRewards(rewardTokens, nfts) {
  const chainId = useActiveChainId();

  const contractInfo = {
    address: stakingContract[chainId].address,
    abi: stakingContract[chainId].abi,
  };

  const { data: pendingRewards } = useContractReads({
    contracts: (rewardTokens || []).map((token) => ({
      ...contractInfo,
      functionName: 'earned',
      args: [token, nfts],
      watch: true,
    })),
  });

  return pendingRewards || [];
}
