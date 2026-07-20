module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((@)?react-native|@react-navigation|@aranzatech/react-native-card-secure-view|react-native-safe-area-context|react-native-screens|react-native-svg)/)',
  ],
};
