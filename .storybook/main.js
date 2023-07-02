// .storybook/main.js

module.exports = {
    addons: ['@storybook/addon-essentials'],
    babel: async (options) => ({
        ...options,
    }),
    framework: '@storybook/react',
    stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
    webpackFinal: async (config, { configType }) => {
        return config;
    },
};
