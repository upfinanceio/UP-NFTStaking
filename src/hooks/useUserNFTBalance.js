import { nftContract } from 'contracts/nftContract/nftContract';
import { useAccount, useContractRead, useNetwork } from 'wagmi';

export default function useUserNFTBalance() {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `balanceOf`,
    args: [address],
    watch: true,
    keepPreviousData: true,
    select: (data) => Number(data),
  });

  return { userNFTBalance: data, isLoading };
}
