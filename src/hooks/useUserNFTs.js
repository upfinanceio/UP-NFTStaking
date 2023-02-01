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
    const fetchNFTs = async (cursor) => {
      const res = await axios({
        url: `${MORALIS_API_ENDPOINT}/:address/nft`,
        method: 'GET',
        headers: {
          'x-api-key': MORALIS_API_KEY,
        },
        params: {
          address: address,
          chain: MORALIS_NETWORK[chainId],
          token_addresses: nftContract[chainId].address,
          cursor,
        },
      });
      return res.data;
    };

    const fetchAll = async () => {
      let cursor = '';
      let nfts = [];
      do {
        const data = await fetchNFTs(cursor);
        if (!data) break;
        cursor = data.cursor;
        nfts = nfts.concat((data.result || []).map((token) => token.token_id));
      } while (cursor !== null);
      setUserNFTs(nfts);
    };

    fetchAll();
  }, [address, chainId, syncFlag]);

  return userNFTs;
}
