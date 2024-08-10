module.exports = {
  extends: 'react-native-builder-bob',
  targets: {
    commonjs: {
      src: 'src',
      dist: 'lib/commonjs',
    },
    module: {
      src: 'src',
      dist: 'lib/module',
    },
    typescript: {
      src: 'src',
      dist: 'lib/typescript',
    },
  },
};
