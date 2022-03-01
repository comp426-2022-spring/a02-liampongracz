import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

try{
    const args = require('minimist')(process.argv.slice(2))

    const call = args['call']
    if (call == null || (call != 'heads' && call != 'tails')) {
        if (call == null) {
            console.log('Error: no input.')
        }
        throw err
    }
    console.log(flipACoin(call))
} catch (err) {
    console.log('Usage: node guess-flip --call[heads|tails]')
}