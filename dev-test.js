const Block = require('./block');


/* commenting this out so I can test  if block is reproducing 
const block = new Block ('foo', 'bar', 'zoo', 'baz');

console.log (block.toString());
console.log(Block.genesis().toString()); */

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log (fooBlock.toString());