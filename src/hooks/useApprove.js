import { nftContract } from 'contracts/nftContract/nftContract';
import { tokenContract } from 'contracts/token/tokenContract';
import { BigNumber } from 'ethers';
import { useContractWrite, useNetwork, usePrepareContractWrite } from 'wagmi';
import { useWaitForTransaction } from 'wagmi';
import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';

export default function useApprove() {
  const toastContext = useToast();
  const { chain } = useNetwork();

  const prep = usePrepareContractWrite({
    address: tokenContract[chain?.id]?.address,
    abi: tokenContract[chain?.id]?.abi,
    functionName: 'approve',
    args: [nftContract[chain?.id]?.address, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'],
    onError(error) {
      console.log('Prep error');
      console.error(error);
    },
  });

  const trans = useContractWrite(prep.config);
  const confirm = useWaitForTransaction({
    confirmations: 1,
    hash: trans.data?.hash,
    onSuccess(data) {
      toastContext.showToast(
        TransactionStatus.Success,
        `Successfully approved BUSD`,
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
    onSettled(data, error) {
      console.log('confirmation Settled', { data, error });
    },
  });

  return {
    trans,
    confirm,
    prep,
  };
}
