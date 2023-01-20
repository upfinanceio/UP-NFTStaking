import axios from 'axios';
import nftContract from 'contracts/nftContract/nftContract';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import useActiveChainId from '@/hooks/useActiveChainId';

import { MORALIS_API_ENDPOINT, MORALIS_NETWORK } from '@/constant';
import { MORALIS_API_KEY } from '@/constant/env';

export default function useUserNFTs(syncFlag) {
  const chainId = useActiveChainId();
  const { address } = useAccount();

  const [userNFTs, setUserNFTs] = useState([]);

  useEffect(() => {
    axios({
      url: `${MORALIS_API_ENDPOINT}/:address/nft`,
      method: 'GET',
      headers: {
        'x-api-key': MORALIS_API_KEY,
      },
      params: {
        address: address,
        chain: MORALIS_NETWORK[chainId],
        token_addresses: nftContract[chainId].address,
      },
    })
      .then((res) => {
        setUserNFTs(res.data.result.map((token) => token.token_id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [address, chainId, syncFlag]);

  return userNFTs;
}
