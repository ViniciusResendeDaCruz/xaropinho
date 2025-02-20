#!/usr/bin/env node

const meow = require('meow');
const xaropinho = require('./index')

const cli = meow(`
  Usage
    $ xaropinho [options]

  Options
    --loop, -l  Execute in loop
    
  Examples
    $ xaropinho        # Play once
    $ xaropinho --loop # Play in loop
    $ xaropinho -l     # Play in loop
`, {
  flags: {
    loop: {
      type: 'boolean',
      alias: 'l'
    }
  }
});

const cliMode = async ({ flags }) => {
  if (flags.loop) {
    while(true) {
      await xaropinho()
    }
  } else {
    await xaropinho()
    process.exit(0)
  }
}

cliMode(cli)
