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
        rewards tokens* that may be added to the contract as part of the monthly distributions.
        <br></br>
        <br></br>You have to be staked to earn rewards!!! Please watch gas price as transactions with multiple
        NFTs can be costly.  It maybe beneficial to not process more than 50 NFTs at once.
        <br></br>
        <br></br>*Additional reward tokens will vary and will not always be part of monthly
        distributions.  Active tokens will show in pending rewards. The contract supports multiple
        reward tokens. Claiming will claim all tokens at once.
      </h3>
      <img src='./images/logo.png' width='50%' />
    </div>
  );
}
