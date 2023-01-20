import { stakingContract } from 'contracts/stakingContract';
import { tokenContract as bep20 } from 'contracts/token/tokenContract';
import { useCallback } from 'react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
} from 'wagmi';
import { useWaitForTransaction } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

import { MAX_INT } from '@/constant';
import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';

export default function useApproveToken(token, callback) {
  const toastContext = useToast();
  const { address: account } = useAccount();
  const chainId = useActiveChainId();

  const contractInfo = {
    address: token,
    abi: bep20[chainId].abi,
  };

  const { data: allowance } = useContractRead({
    ...contractInfo,
    functionName: 'allowance',
    args: [account, stakingContract[chainId].address],
  });

  const prep = usePrepareContractWrite({
    ...contractInfo,
    functionName: 'approve',
    args: [stakingContract[chainId]?.address, MAX_INT],
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
        `Successfully approved`,
        trans.data.hash
      );
      callback();
    },
    onError(error) {
      console.error(error);
      toastContext.showToast(
        TransactionStatus.Failed,
        `Failed to approve`,
        trans.data.hash
      );
    },
  });

  const approve = useCallback(() => {
    if (trans.write) trans.write();
  }, [allowance, prep, trans, conf]);

  return {
    allowance: allowance || 0,
    approve,
  };
}
