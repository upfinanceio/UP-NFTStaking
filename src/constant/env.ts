export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const DEFAULT_CHAIN_ID = isProd ? 56 : 97;

export const MORALIS_API_KEY = '2t0rHksDdC5J69LDsa8ko1EwgEnrTCjWAUCkg3YdBBug5E8AzexPWn4gtoKbtbsp';