import { tokenContract } from 'contracts/token/tokenContract';
import { useAccount, useContractRead, useNetwork } from 'wagmi';

import { BigNumberToLocalString } from '@/lib/numberToLocalString';

export default function useUserBalance() {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address: tokenContract[chain?.id]?.address,
    abi: tokenContract[chain?.id]?.abi,
    functionName: `balanceOf`,
    args: [address],
    watch: true,
    keepPreviousData: true,
    select: (data) => BigNumberToLocalString(data, 1),
  });

  return { userBalance: data, isLoading };
}
