import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractReads, useNetwork } from 'wagmi';

export default function useRefs() {
  const { chain } = useNetwork();

  let { data: refs } = useContractReads({
    contracts: [
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [1],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [2],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [3],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [4],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [5],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [6],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [7],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [8],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [9],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [10],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [11],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [12],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [13],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [14],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [15],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [16],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [17],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [18],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [19],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [20],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [21],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [22],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [23],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [24],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [25],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [26],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [27],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [28],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [29],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [30],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [31],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [32],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [33],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [34],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [35],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [36],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [37],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [38],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [39],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [40],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [41],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [42],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [43],
        select: (data) => Number(data),
      },
      {
        address: nftContract[chain?.id]?.address,
        abi: nftContract[chain?.id]?.abi,
        functionName: `refInfo`,
        args: [44],
        select: (data) => Number(data),
      },
    ],
  });

  return { refs };
}
