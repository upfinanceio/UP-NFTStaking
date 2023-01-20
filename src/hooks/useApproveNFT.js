import { nftContract } from 'contracts/nftContract/nftContract';
import { stakingContract } from 'contracts/stakingContract';
import { useCallback } from 'react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { useWaitForTransaction } from 'wagmi';

import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';

import useActiveChainId from './useActiveChainId';

export default function useApproveNFT() {
  const toastContext = useToast();
  const { address: account } = useAccount();
  const chainId = useActiveChainId();

  const contractInfo = {
    address: nftContract[chainId].address,
    abi: nftContract[chainId].abi,
  };

  const { data: isApproved } = useContractRead({
    ...contractInfo,
    functionName: 'isApprovedForAll',
    args: [account, stakingContract[chainId].address],
    watch: true,
  });

  const prep = usePrepareContractWrite({
    ...contractInfo,
    functionName: 'setApprovalForAll',
    args: [stakingContract[chainId]?.address, true],
    onError(error) {
      // eslint-disable-next-line no-console
      console.log('Approve Preparation error');
      // eslint-disable-next-line no-console
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
        `Successfully approved NFT`,
        trans.data.hash
      );
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
  }, [isApproved, prep, trans, conf]);

  return {
    isApproved,
    approve,
  };
}
