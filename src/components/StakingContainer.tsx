import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import {
  GiCancel,
  GiChargedArrow,
  GiReceiveMoney,
  GiSoap,
  GiSpoutnik,
} from 'react-icons/gi';
import { useAccount } from 'wagmi';

import useApproveNFT from '@/hooks/useApproveNFT';
import useApproveToken from '@/hooks/useApproveToken';
import useClaim from '@/hooks/useClaim';
import usePendingRewards from '@/hooks/usePendingRewards';
import usePoolInfo from '@/hooks/usePoolInfo';
import useStake from '@/hooks/useStake';
import useToken from '@/hooks/useToken';
import useUnstake from '@/hooks/useUnstake';
import useUserBalance from '@/hooks/useUserBalance';
import useUserNFTs from '@/hooks/useUserNFTs';
import useUserStakedNFTs from '@/hooks/useUserStakedNFTs';

import AnimatedButton from '@/components/buttons/AnimatedButton';
import ConnectButton from '@/components/buttons/ConnectButton';
import LoadingSpinner from '@/components/LoadingSpinner';

import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';
import { Max, Min } from '@/utils/number';

enum Panel {
  MAIN = 1,
  STAKE = 2,
  UNSTAKE = 3,
}

type StakePanelProps = {
  targetNFTs: number[];
  onClose: () => void;
};

type MainPanelProps = {
  stakedNFTs: number[];
  userNFTs: number[];
  switchPanel: (panel: number) => void;
};

type RewardTableRowProps = {
  token: string;
  reward: BigNumber;
};

const StakePanel = ({ targetNFTs, onClose }: StakePanelProps) => {
  const [quantity, setQuantity] = useState(1);
  const max = targetNFTs.length;
  const { stake, isStaking } = useStake(targetNFTs, quantity, onClose);

  return (
    <div className='mt-2 select-none'>
      <div className='flex select-none items-center justify-between'>
        <div className=''>Quantity</div>
        <div className='flex items-center gap-4'>
          <button
            disabled={isStaking}
            onClick={() => {
              setQuantity(1);
            }}
          >
            <span>Min</span>
          </button>
          <button
            disabled={isStaking || quantity == 1}
            onClick={() => {
              setQuantity((prevQ) => Max(prevQ - 1, 0));
            }}
          >
            <FaMinusSquare />
          </button>
          <div className='select-none font-bold'>{quantity}</div>
          <button
            disabled={isStaking}
            onClick={() => {
              setQuantity((prevQ) => Min(prevQ + 1, max));
            }}
          >
            <FaPlusSquare />
          </button>
          <button
            disabled={isStaking}
            onClick={() => {
              setQuantity(max);
            }}
          >
            <span>Max</span>
          </button>
        </div>
      </div>
      <div className='mt-2 flex justify-between gap-2'>
        <AnimatedButton
          title='Stake'
          backgroundColor='bg-yellow-600'
          icon={
            isStaking ? <LoadingSpinner /> : <GiChargedArrow color='white' />
          }
          onClick={stake}
        />
        <AnimatedButton
          title='Cancel'
          backgroundColor='bg-yellow-600'
          icon={<GiCancel color='white' />}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const UnstakePanel = ({ targetNFTs, onClose }: StakePanelProps) => {
  const toastContext = useToast();
  const [quantity, setQuantity] = useState(1);
  const max = targetNFTs.length;
  const { feeToken, feeAmount } = usePoolInfo();

  const balance = useUserBalance(feeToken);
  const { unstake, isUnstaking } = useUnstake(targetNFTs, quantity, onClose);
  const { allowance, approve: approveFeeToken } = useApproveToken(
    feeToken,
    unstake
  );

  const needToApproveFeeToken = () => {
    return BigNumber.from(allowance).lt(BigNumber.from(feeAmount));
  };

  const hasEnoughFeeToken = () => {
    return BigNumber.from(balance) > BigNumber.from(feeAmount);
  };

  return (
    <div className='mt-2 select-none'>
      <div className='flex select-none items-center justify-between'>
        <div className=''>Quantity</div>
        <div className='flex items-center gap-4'>
          <button
            disabled={isUnstaking}
            onClick={() => {
              setQuantity(1);
            }}
          >
            <span>Min</span>
          </button>
          <button
            disabled={isUnstaking || quantity == 1}
            onClick={() => {
              setQuantity((prevQ) => Max(prevQ - 1, 0));
            }}
          >
            <FaMinusSquare />
          </button>
          <div className='select-none font-bold'>{quantity}</div>
          <button
            disabled={isUnstaking}
            onClick={() => {
              setQuantity((prevQ) => Min(prevQ + 1, max));
            }}
          >
            <FaPlusSquare />
          </button>
          <button
            disabled={isUnstaking}
            onClick={() => {
              setQuantity(max);
            }}
          >
            <span>Max</span>
          </button>
        </div>
      </div>
      <div className='mt-2 flex justify-between gap-2'>
        <AnimatedButton
          title='Unstake'
          backgroundColor='bg-yellow-600'
          icon={isUnstaking ? <LoadingSpinner /> : <GiSoap color='white' />}
          onClick={() => {
            if (!hasEnoughFeeToken()) {
              toastContext?.showToast(
                TransactionStatus.Failed,
                `You have not enough unstake fee token`,
                ''
              );
              return;
            }
            if (needToApproveFeeToken()) {
              approveFeeToken();
            } else {
              unstake();
            }
          }}
        />
        <AnimatedButton
          title='Cancel'
          backgroundColor='bg-yellow-600'
          icon={<GiCancel color='white' />}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const RewardTableRow = ({ token, reward }: RewardTableRowProps) => {
  const { symbol, decimals } = useToken(token);
  const amountInEther = useMemo(() => {
    if (!decimals || !reward) return 0;
    return (+formatUnits(reward, Number(decimals))).toFixed(3);
  }, [reward, decimals]);
  return (
    <>
      <div className='flex justify-between'>
        <div className=''>{`Reward for ${symbol}`}</div>
        <div className='font-bold'>{`${amountInEther} ${symbol}`}</div>
      </div>
    </>
  );
};

const MainPanel = ({ userNFTs, stakedNFTs, switchPanel }: MainPanelProps) => {
  const { isApproved: isNFTApproved, approve: approveNFT } = useApproveNFT();
  const { rewardTokens } = usePoolInfo();
  const pendingRewards = usePendingRewards(rewardTokens, stakedNFTs);
  const { claim, isClaiming } = useClaim();

  return (
    <>
      <div className='mt-2 select-none'>
        <div className='flex justify-between'>
          <div className=''>Your Holding NFTs</div>
          <div className='font-bold'>{`${userNFTs?.length}`} NFTs</div>
        </div>
        <div className='flex justify-between'>
          <div className=''>Your Staked NFTs</div>
          <div className='font-bold'>
            {`${(stakedNFTs as number[]).length}`} NFTs
          </div>
        </div>
        {(rewardTokens as string[])
          .map((token, index) => ({ key: index, value: token }))
          .filter(({ key }) => BigNumber.from(pendingRewards[key]).gt(0))
          .map(({ key, value }) => (
            <RewardTableRow
              token={value}
              reward={BigNumber.from(pendingRewards[key] || 0)}
              key={key}
            />
          ))}
      </div>

      {isNFTApproved ? (
        <div className='mt-2 flex justify-between gap-2'>
          <AnimatedButton
            disabled={userNFTs.length <= 0}
            title='Stake'
            backgroundColor='bg-yellow-600'
            icon={<GiChargedArrow color='white' />}
            onClick={() => switchPanel(Panel.STAKE)}
          />
          <AnimatedButton
            disabled={(stakedNFTs as number[]).length <= 0}
            title='Unstake'
            backgroundColor='bg-yellow-600'
            icon={<GiSoap color='white' />}
            onClick={() => switchPanel(Panel.UNSTAKE)}
          />
          <AnimatedButton
            disabled={(stakedNFTs as number[]).length <= 0}
            title='Claim'
            backgroundColor='bg-yellow-600'
            icon={
              isClaiming ? <LoadingSpinner /> : <GiSpoutnik color='white' />
            }
            onClick={claim}
          />
        </div>
      ) : (
        <div className='mt-3 select-none'>
          <AnimatedButton
            disabled={false}
            title='Approve NFT'
            backgroundColor='bg-yellow-600'
            icon={<GiReceiveMoney color='white' />}
            onClick={approveNFT}
          />
        </div>
      )}
    </>
  );
};

export function StakingContainer() {
  const { address: account } = useAccount();
  const [panel, setPanel] = useState<Panel>(Panel.MAIN);
  const [syncFlag, setSyncFlag] = useState(false);

  const stakedNFTs = useUserStakedNFTs();
  const userNFTs = useUserNFTs(syncFlag);

  useEffect(() => {
    setSyncFlag(!syncFlag);
  }, [panel]);

  return (
    <>
      <div className=''>
        <div className='flex justify-center'>
          <div className='w-[80%] rotate-0 rounded-t-3xl rounded-b-lg border-[1px] border-white/20 bg-white/10 px-3 py-3 uppercase text-white shadow-2xl backdrop-blur-sm transition-all hover:bg-white/20 md:w-[350px] md:rotate-2 lg:w-[450px]'>
            <div className='py-1 px-1'>
              <div className='relative h-full'>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='rounded-t-2xl rounded-b-md'
                >
                  <source
                    src='./images/video.mp4'
                    type='video/webm; codecs=vp9'
                  />
                </video>
                {account ? (
                  <>
                    {panel == Panel.MAIN && (
                      <MainPanel
                        userNFTs={userNFTs}
                        stakedNFTs={stakedNFTs as number[]}
                        switchPanel={(panel) => setPanel(panel)}
                      />
                    )}
                    {panel == Panel.STAKE && (
                      <StakePanel
                        targetNFTs={userNFTs}
                        onClose={() => {
                          setPanel(Panel.MAIN);
                        }}
                      />
                    )}
                    {panel == Panel.UNSTAKE && (
                      <UnstakePanel
                        targetNFTs={stakedNFTs as number[]}
                        onClose={() => {
                          setPanel(Panel.MAIN);
                        }}
                      />
                    )}
                  </>
                ) : (
                  <div className='mt-2 select-none'>
                    <ConnectButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
