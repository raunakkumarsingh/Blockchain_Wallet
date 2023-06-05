CypherWallet
=================

oclif example Cypherwallet CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)

# Usage
<!-- usage -->
```sh-session
$ npm install -g cypherock
$ cypherock COMMAND
running command...
$ cypherock (--version)
cypherock/0.0.0 win32-x64 node-v18.14.2
$ cypherock --help [COMMAND]
USAGE
  $ cypherock COMMAND
...
```



## `cypherock help [COMMANDS]`

Display help for cypherock.
```
USAGE
  $ cypherock help [COMMANDS] [-n]
ARGUMENTS
  COMMANDS  Command to show help for.
FLAGS
  -n, --nested-commands  Include all nested commands in the output.
DESCRIPTION
  Display help for cypherock.
```



<H2> CypheWallet</H2>

All Database is Implemented in Better-Sqlite3 (File based database) 
development- ./bin/dev Wallet

Create Wallet
```
wallet createWallet -a "Wallet name"
```
Import Wallet
<br>
Take Input of Mnemonic in console by readline npm 
```
wallet importWallet 
```
List Wallet
```
wallet listWallet
```
btcTransaction
```
wallet btcTransaction -a "wallet address"
```
btcBalance
```
wallet btcBalance -a "wallet address"
```


                





