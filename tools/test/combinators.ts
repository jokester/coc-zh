import { limit } from '../lib/util';

const log = limit(console.log.bind(console), 1e3, 5e3);

for (let a = 0; a < 10; a++) {
    log(a);
}

console.log('called all');