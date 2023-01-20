import { stakingContract } from 'contracts/stakingContract';
import { useCallback, useMemo } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useWaitForTransaction } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';
import { randomSubArray } from '@/utils/array';

export default function useUnstake(nfts, quantity, callback) {
  const toastContext = useToast();
  const chainId = useActiveChainId();
  const tokenIds = useMemo(
    () => randomSubArray(nfts, quantity),
    [quantity, nfts]
  );
  
  const prep = usePrepareContractWrite({
    address: stakingContract[chainId]?.address,
    abi: stakingContract[chainId]?.abi,
    functionName: 'unstake',
    args: [tokenIds],
    onError(error) {
      console.error(error);
    },
  });

  const trans = useContractWrite(prep.config);
  const conf = useWaitForTransaction({
    confirmations: 1,
    hash: trans.data?.hash,
    onSuccess(data) {
      toastContext.showToast(
        TransactionStatus.Success,
        `Successfully unstaked ${quantity} NFTs`,
        trans.data.hash
      );
      callback();
    },
    onError(error) {
      console.error(error);
      toastContext.showToast(
        TransactionStatus.Failed,
        `Failed to unstake ${quantity} NFTs`,
        trans.data.hash
      );
    },
    onSettled(data, error) {
      console.log('confirmation Settled', { data, error });
    },
  });

  const unstake = useCallback(() => {
    if (trans.write) trans.write();
  }, [prep, trans, conf]);

  return {
    unstake,
    isUnstaking: conf.isLoading,
  };
}
