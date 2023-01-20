import { BigNumber } from 'ethers';

export const parseUnit = (amount: BigNumber, decimals = 18) => {
  return BigNumber.from(amount)
    .div(BigNumber.from(10).pow(decimals)).toString();
};

export const parseEther = (amount: number, decimals = 18) => {
  return BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
};
