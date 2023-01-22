export function Hero() {
  console.log("Hero")
  return (
    <div className='rounded-lg border-[0px] p-5 drop-shadow-md'>
      <h1 className='text-6xl'>
        <span className='text-yellow-500'>oNFT</span> Staking
      </h1>
      <h2 className='text-3xl'>
        Stake your UP oNFT and earn multiple reward tokens.
      </h2>

      <h3 className='mt-10 mb-0 text-lg text-slate-50'>
        <br></br> Stake to earn monthly rewards in $UP and be eligible for any additional
        rewards* in different tokens within UP's and our partners' ecosystems... 
        You have to be staked to earn rewards!!!
        <br></br>
        <br></br>*Additional reward tokens will vary and will not always be part of monthly
        distributions.  Active tokens will show in pending rewards.
      </h3>
      <img src='./images/logo.png' width='50%' />
    </div>
  );
}
