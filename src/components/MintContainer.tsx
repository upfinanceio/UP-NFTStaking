//import Video from 'next/video';
import { useMemo, useState } from 'react';
import { FaMinusSquare } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { useAccount } from 'wagmi';


import useMaxSupply from '@/hooks/useMaxSupply';
import useMint from '@/hooks/useMint';
import usePrice from '@/hooks/usePrice';
import useSupply from '@/hooks/useSupply';
import useCheckApprove from '@/hooks/useCheckApprove';
import useApprove from '@/hooks/useApprove';

import AnimatedButton from '@/components/buttons/AnimatedButton';
import ConnectButton from '@/components/buttons/ConnectButton';
import LoadingSpinner from '@/components/LoadingSpinner';

export function MintContainer() {
  const [quantity, setQuantity] = useState(1);

  const { address } = useAccount();
  const { price } = usePrice();
  const { approved } = useCheckApprove(address); 

  const { supply } = useSupply();
  const { maxSupply } = useMaxSupply();
  const { preparation, transaction, confirmation } = useMint(quantity);
  const { prep, trans, confirm } = useApprove();

  const totalCost = useMemo(
    () => (price ? (Number(price) * quantity).toFixed(1) : null),
    [price, quantity]
  );

  const mint = () => {
    if (transaction.write) {
      transaction.write();
    }
  };

  const approve = () => {
    if (trans.write) {
      trans.write();
    }
  };

  const isMinting = () => {
    if (confirmation.isLoading) {
      return true;
    }
    return false;
  };

  const getButtonTitle = () => {
    if (transaction.isLoading === true) {
      return 'Confirm ...';
    }
    if (confirmation.isLoading) {
      return 'Minting ...';
    }
    return 'Mint';
  };

  return (
    <div className=''>
      <div className='flex justify-center'>
        <div className='w-[400px] rotate-2 rounded-t-3xl rounded-b-lg border-[1px] border-slate-100/20 bg-white/10 px-3 py-3 uppercase text-white shadow-2xl transition-all hover:bg-white/20'>
          <div className='py-1 px-1'>
            <div className='relative h-full'>
        <video autoPlay loop muted playsInline className='rounded-t-2xl rounded-b-md'>
            <source src="./images/video.mp4" type='video/webm; codecs=vp9'/>
        </video>
              {address && (
                <>
                  <div className='mt-2'>
                    <div className='flex justify-between'>
                      <div className=''>Price</div>
                      <div className='font-bold'>{totalCost} BUSD</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className=''>Remaining Supply</div>
                      <div className='font-bold'>
                        {`${supply} / ${maxSupply}`}
                      </div>
                    </div>

                    <div className='flex select-none items-center justify-between '>
                      <div className=''>Quantity</div>
                      <div className='flex items-center gap-4'>
                        <button
                          disabled={isMinting() || quantity == 1}
                          onClick={() => {
                            setQuantity((prevQ) => prevQ - 1);
                          }}
                        >
                          <FaMinusSquare />
                        </button>
                        <div className='select-none font-bold'>{quantity}</div>
                        <button
                          disabled={isMinting()}
                          onClick={() => {
                            setQuantity((prevQ) => prevQ + 1);
                          }}
                        >
                          <FaPlusSquare />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {approved && (   
                    <div className='mt-3 select-none'>
                    <AnimatedButton
                      disabled={preparation.isError}
                      title={getButtonTitle()}
                      backgroundColor='bg-yellow-600'
                      icon={
                        isMinting() ? (
                          <LoadingSpinner />
                        ) : (
                          <GiReceiveMoney
                            color='white'
                            className='mt-[-3px] mr-2 inline-block'
                          />
                        )
                      }
                      onClick={mint}
                    />
                    </div>)}                    
                  {!approved && 
                  <div className='mt-3 select-none'>
                    <AnimatedButton
                      disabled={prep.isError}
                      title={'Approve BUSD'}
                      backgroundColor='bg-yellow-600'
                      icon={<GiReceiveMoney
                            color='white'
                            className='mt-[-3px] mr-2 inline-block'
                          />}
                      onClick={approve}
                    /></div>
                  }
                  
                </>
              )}
              
              {!address && <div className='mt-3 select-none'><ConnectButton /></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
