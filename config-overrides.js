const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@hooks": "src/hooks",
    "@configs": "src/configs",
    "@services": "src/services",
    "@shared": "src/shared",
    "@store": "src/store",
    "@utils": "src/utils",
    "@ui": "src/components/ui",
    "@fonts": "src/fonts",
    "@providers": "src/providers",
    "@router": "src/router",
  })(config);

  return config;
};
