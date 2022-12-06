import { nftContract } from 'contracts/nftContract/nftContract';
import { tokenContract } from 'contracts/token/tokenContract';
import { useAccount, useContractRead, useNetwork } from 'wagmi';

export default function useCheckApprove() {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data, isLoading } = useContractRead({
    address: tokenContract[chain?.id]?.address,
    abi: tokenContract[chain?.id]?.abi,
    functionName: `allowance`,
    args: [address, nftContract[chain?.id]?.address],
    watch: false,
    select: (data) => (data > 0 ? true : false),
  });

  return { approved: data, isLoading };
}
