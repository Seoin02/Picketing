import designSystemConfig from '../design-system/tailwind.config';

const designSystemColors = designSystemConfig.theme.colors;

const config = {
  ...designSystemConfig,
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../design-system/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...designSystemColors,
      },
    },
  },
  plugins: [],
};

export default config;
