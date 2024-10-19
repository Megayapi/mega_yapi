import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off',
    'cannot-find-module': 'off',
  },

  typescript: true,
  vue: true,

})
