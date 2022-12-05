import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractRead, useNetwork } from 'wagmi';
import { useRouter } from "next/router";
import { BigNumberToLocalString } from '@/lib/numberToLocalString';

export default function usePrice() {
  const { chain } = useNetwork();

  let { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `price`,
    watch: false,
    select: (data) => BigNumberToLocalString(data, 1),
  });
//testing
  const router = useRouter();
  let { ref } = router.query;
  if (typeof ref === 'undefined'){
    data = '200';
  }else{
    data = '180';
  }

  return { price: data, isLoading };
}
