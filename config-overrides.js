const {alias} = require('react-app-rewire-alias')



module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@hooks': 'src/hooks',
    '@config': 'src/config',
    '@services': 'src/services',
    '@shared': 'src/shared',
    '@store': 'src/store',
    '@utils': 'src/utils',
    '@ui': 'src/components/ui',
  })(config)

  return config
}