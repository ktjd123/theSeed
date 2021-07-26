const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: "@import 'utils';",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
