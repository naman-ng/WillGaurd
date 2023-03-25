import * as React from 'react';
import NextHead from 'next/head';
import '../styles/globals.css';

// Imports
import { chain, createClient, WagmiConfig, configureChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { useIsMounted } from '../hooks';
import { fantomTestnet } from '@wagmi/chains';

const fireChain = {
  id: 997,
  name: "5ireChain",
  network: "5ireChain",
  nativeCurrency: {
    decimals: 18,
    name: "5ire Coin",
    symbol: "5IRE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "5ireChain Explorer",
      url: "https://explorer.5ire.network/",
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [fantomTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({ http: "https://rpc-testnet.5ire.network/" }),
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'WillGuard',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <NextHead>
          <title>WillGaurd</title>
        </NextHead>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
