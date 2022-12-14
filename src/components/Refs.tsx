import useRefs from '@/hooks/useRefs';



export default function Refs() {
  const { refs } = useRefs();

  return refs && refs.length > 0 ? (
    <>
      <div className='mt-40 flex justify-center'>
        
        <div className='mt-2 grid grid-cols-1 gap-1 md:grid-cols-1' style={{width: '50%'}}>
        <h1 className='text-white-500 text-3xl mb-10' style={{textAlign: 'center'}}>Referral Leaderboard</h1>
        <table style={{width: '100%'}}>
                <tr>
                  <th>Referrer Name</th>
                  <th>NFTs Minted</th>
                </tr>
                <tr>
                  <td>WarFi</td>
                  <td>{Number(refs[0])}</td>
                </tr>
                <tr>
                  <td>Grape Finance</td>
                  <td>{Number(refs[1])}</td>
                </tr>
                <tr>
                  <td>Jame Pelton</td>
                  <td>{Number(refs[2])}</td>
                </tr>
                <tr>
                  <td>BlockchainBen</td>
                  <td>{Number(refs[3])}</td>
                </tr>
                <tr>
                  <td>Frozen Walrus</td>
                  <td>{Number(refs[4])}</td>
                </tr>
                <tr>
                  <td>Magik</td>
                  <td>{Number(refs[5])}</td>
                </tr>
                <tr>
                  <td>FireHustle</td>
                  <td>{Number(refs[6])}</td>
                </tr>
                <tr>
                  <td>JonCole</td>
                  <td>{Number(refs[7])}</td>
                </tr>
                <tr>
                  <td>Ambo</td>
                  <td>{Number(refs[8])}</td>
                </tr>
                <tr>
                  <td>ThePillars</td>
                  <td>{Number(refs[9])}</td>
                </tr>
                <tr>
                  <td>ThePassiveIncomeGuy</td>
                  <td>{Number(refs[10])}</td>
                </tr>
                <tr>
                  <td>CryptoJake</td>
                  <td>{Number(refs[11])}</td>
                </tr>
                <tr>
                  <td>EgoVerse</td>
                  <td>{Number(refs[12])}</td>
                </tr>
                <tr>
                  <td>CryptowithMalcolm</td>
                  <td>{Number(refs[13])}</td>
                </tr>
                <tr>
                  <td>JackTheRippler</td>
                  <td>{Number(refs[14])}</td>
                </tr>
                <tr>
                  <td>CD</td>
                  <td>{Number(refs[15])}</td>
                </tr>
                <tr>
                  <td>MoGadi</td>
                  <td>{Number(refs[16])}</td>
                </tr>
                <tr>
                  <td>Dao King</td>
                  <td>{Number(refs[17])}</td>
                </tr>
                <tr>
                  <td>CryptoAndy</td>
                  <td>{Number(refs[18])}</td>
                </tr>
                <tr>
                  <td>Max-Cashflow</td>
                  <td>{Number(refs[19])}</td>
                </tr>
                <tr>
                  <td>Der Defi Dude</td>
                  <td>{Number(refs[20])}</td>
                </tr>
                <tr>
                  <td>Lybra</td>
                  <td>{Number(refs[21])}</td>
                </tr>
                <tr>
                  <td>Gabosagaz</td>
                  <td>{Number(refs[22])}</td>
                </tr>
                <tr>
                  <td>Paul Dutton</td>
                  <td>{Number(refs[23])}</td>
                </tr>
                <tr>
                  <td>Selected Investments</td>
                  <td>{Number(refs[24])}</td>
                </tr>
                <tr>
                  <td>SafuuX News</td>
                  <td>{Number(refs[25])}</td>
                </tr>
                <tr>
                  <td>Crypto All Stars</td>
                  <td>{Number(refs[26])}</td>
                </tr>
                <tr>
                  <td>Project79</td>
                  <td>{Number(refs[27])}</td>
                </tr>
                <tr>
                  <td>TheCoffeeBlock</td>
                  <td>{Number(refs[28])}</td>
                </tr>
                <tr>
                  <td>Defi Maso</td>
                  <td>{Number(refs[29])}</td>
                </tr>
                <tr>
                  <td>Rmack56</td>
                  <td>{Number(refs[30])}</td>
                </tr>
                <tr>
                  <td>deficriminal</td>
                  <td>{Number(refs[31])}</td>
                </tr>
                <tr>
                  <td>APlus</td>
                  <td>{Number(refs[32])}</td>
                </tr>
                <tr>
                  <td>radishz</td>
                  <td>{Number(refs[33])}</td>
                </tr>
                <tr>
                  <td>Matt Bills</td>
                  <td>{Number(refs[34])}</td>
                </tr>
                <tr>
                  <td>Jimbob</td>
                  <td>{Number(refs[35])}</td>
                </tr>
                <tr>
                  <td>Foggie 24K</td>
                  <td>{Number(refs[36])}</td>
                </tr>
                <tr>
                  <td>LadyBossNat</td>
                  <td>{Number(refs[37])}</td>
                </tr>
                <tr>
                  <td>RazzTafari</td>
                  <td>{Number(refs[38])}</td>
                </tr>
                <tr>
                  <td>cryptomoneyengine</td>
                  <td>{Number(refs[39])}</td>
                </tr>
                <tr>
                  <td>Giaco</td>
                  <td>{Number(refs[40])}</td>
                </tr>
                <tr>
                  <td>lumabet</td>
                  <td>{Number(refs[41])}</td>
                </tr>
                <tr>
                  <td>Gday Crypto - Sean Clarke</td>
                  <td>{Number(refs[42])}</td>
                </tr>
                <tr>
                  <td>CryptoZin</td>
                  <td>{Number(refs[43])}</td>
                </tr>

              </table>
{/*
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 1: {Number(refs[0])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 2: {Number(refs[1])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 3: {Number(refs[2])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 4: {Number(refs[3])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 5: {Number(refs[4])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 6: {Number(refs[5])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 7: {Number(refs[6])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 8: {Number(refs[7])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 9: {Number(refs[8])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 10: {Number(refs[9])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 11: {Number(refs[10])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 12: {Number(refs[11])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 13: {Number(refs[12])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 14: {Number(refs[13])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 15: {Number(refs[14])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 16: {Number(refs[15])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 17: {Number(refs[16])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 18: {Number(refs[17])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 19: {Number(refs[18])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 20: {Number(refs[19])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 21: {Number(refs[20])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 22: {Number(refs[21])}</div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3 text-xl'>Ref 23: {Number(refs[22])}</div>
          </div>
  */}
        </div>
      </div>
    </>
  ) : null;
}
