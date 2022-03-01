import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

try{
    const args = require('minimist')(process.argv.slice(2))

    const call = args['call']
    if (call == null || (call != 'heads' && call != 'tails')) {
        throw err
    }
    console.log(flipACoin(call))
} catch (err) {
    console.log(`Error: no input.\nUsage: node guess-flip --call[heads|tails]`)
}