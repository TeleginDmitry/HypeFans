const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('src/components'),
      '@providers': resolvePath('src/providers'),
      '@services': resolvePath('src/services'),
      '@ui': resolvePath('src/components/ui'),
      '@configs': resolvePath('src/configs'),
      '@router': resolvePath('src/router'),
      '@shared': resolvePath('src/shared'),
      '@assets': resolvePath('src/assets'),
      '@fonts': resolvePath('src/fonts'),
      '@utils': resolvePath('src/utils'),
      '@store': resolvePath('src/store'),
      '@hooks': resolvePath('src/hooks')
    }
  }
}
