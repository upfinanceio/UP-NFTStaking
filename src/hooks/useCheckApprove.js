import { tokenContract } from 'contracts/token/tokenContract';
import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractRead, useNetwork } from 'wagmi';

import { BigNumberToLocalString } from '@/lib/numberToLocalString';

export default function useCheckApprove(account) {
  const { chain } = useNetwork();

  const { data, isLoading } = useContractRead({
    address: tokenContract[chain?.id]?.address,
    abi: tokenContract[chain?.id]?.abi,
    functionName: `allowance`,
    args: [account, nftContract[chain?.id]?.address],
    watch: false,
    select: (data) => data > 0 ? true: false,
  });
  
  return { approved: data, isLoading };
}
