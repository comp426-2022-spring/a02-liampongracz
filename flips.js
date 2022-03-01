import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2))
const flips = args['number'] || 1
const values = coinFlips(flips)
console.log(values)
console.log(countFlips(values))
