import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractRead, useNetwork } from 'wagmi';

export default function useMaxSupply() {
  const { chain } = useNetwork();

  let { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `TOTAL`,
    watch: false,
    select: (data) => Number(data),
  });

  data = 5000;

  return { maxSupply: data, isLoading };
}
