declare const config: {
  APP: Record<string, unknown>;
  locationType: 'history' | 'hash' | 'none';
  modulePrefix: string;
  podModulePrefix?: string;
  rootURL: string;
} & Record<string, unknown>;

export default config;
