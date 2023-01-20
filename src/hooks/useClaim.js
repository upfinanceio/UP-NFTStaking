import { stakingContract } from 'contracts/stakingContract';
import { useCallback } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useWaitForTransaction } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';

export default function useClaim() {
  const toastContext = useToast();
  const chainId = useActiveChainId();

  const prep = usePrepareContractWrite({
    address: stakingContract[chainId]?.address,
    abi: stakingContract[chainId]?.abi,
    functionName: 'claim',
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
        `Successfully claimed NFTs`,
        trans.data.hash
      );
    },
    onError(error) {
      console.error(error);
      toastContext.showToast(
        TransactionStatus.Failed,
        `Failed to claimed NFTs`,
        trans.data.hash
      );
    },
    onSettled(data, error) {
      console.log('confirmation Settled', { data, error });
    },
  });

  const claim = useCallback(() => {
    if (trans.write) trans.write();
  }, [prep, trans, conf]);
  
  return {
    claim,
    isClaiming: conf.isLoading,
  };
}
