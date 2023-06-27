const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('src/components'),
      '@assets': resolvePath('src/assets'),
      '@hooks': resolvePath('src/hooks'),
      '@configs': resolvePath('src/configs'),
      '@services': resolvePath('src/services'),
      '@shared': resolvePath('src/shared'),
      '@store': resolvePath('src/store'),
      '@utils': resolvePath('src/utils'),
      '@ui': resolvePath('src/components/ui'),
      '@fonts': resolvePath('src/fonts'),
      '@providers': resolvePath('src/providers'),
      '@router': resolvePath('src/router')
    }
  }
}
