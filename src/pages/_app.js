import { ConnectKitProvider } from 'connectkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

import '@/styles/globals.css';

import Toast from '@/components/layout/Toast';

import { ToastProvider } from '@/contexts/ToastContext';

const bsc = {
  id: 56,
  name: `Binance`,
  network: `bsc`,
  nativeCurrency: {
    decimals: 18,
    name: `Binance`,
    symbol: `BSC`,
  },
  rpcUrls: {
    default: `https://bsc-dataseed.binance.org/`,
  },
  blockExplorers: {
    default: { name: `BSC Scan`, url: `https://bscscan.com` },
  },
  testnet: false,
};

const bscTestnet = {
  id: 97,
  name: `BSC Testnet`,
  network: `bscTestnet`,
  nativeCurrency: {
    decimals: 18,
    name: `Binance`,
    symbol: `BSC`,
  },
  rpcUrls: {
    default: `https://data-seed-prebsc-1-s2.binance.org:8545/`,
  },
  blockExplorers: {
    default: { name: `BSC Scan`, url: `https://testnet.bscscan.com/` },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [bsc, bscTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== bsc.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== bscTestnet.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: { [56]: `https://bsc-dataseed.binance.org/` },
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: `Injected`,
        shimDisconnect: true,
      },
    }),
  ],
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        options={{
          walletConnectName: `Wallet Connect`,
        }}
      >
        <ToastProvider>
          <Toast />
          <Component {...pageProps} />
        </ToastProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
