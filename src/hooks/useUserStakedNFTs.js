import { stakingContract } from 'contracts/stakingContract';
import { useAccount, useContractRead, useContractReads } from 'wagmi';

import useActiveChainId from './useActiveChainId';

export default function useUserStakedNFTs() {
  const chainId = useActiveChainId();
  const { address } = useAccount();

  const contractInfo = {
    address: stakingContract[chainId].address,
    abi: stakingContract[chainId].abi,
  };

  const { data: stakedNFTs } = useContractRead({
    ...contractInfo,
    functionName: 'getStakedNFTS',
    args: [address],
    watch: true,
  });

  return stakedNFTs || [];
}
