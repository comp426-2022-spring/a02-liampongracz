import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2))
const flips = args['number'] || 1
console.log(coinFlips(flips))