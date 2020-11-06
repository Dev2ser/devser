process.env.NODE_PATH = __dirname + '/lib/node_modules/';
process.env.NPM_CONFIG_PREFIX = './lib/node_modules';
require('module').Module._initPaths();
