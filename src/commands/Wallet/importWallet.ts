import {Args, Command, Flags} from '@oclif/core'
const readline = require('readline');
import DataDb from '../../lib/data-db'
import {Data} from '../../lib/data'
const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export default class WalletImportWallet extends Command {
  #db =new DataDb(this.config.dataDir)
  static description = 'Importing a wallet from mnemonic'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(WalletImportWallet)
    // Mnemoic KEY

    try{
    let Mnemonic = await new Promise(resolve => {
      rl.question("Enter Mnemonic Key? ", resolve)
    })
   
    // Mnemonic to address
    const seed = await bip39.mnemonicToSeed(Mnemonic);
    const root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);
    const node = root.derivePath("m/49'/0'/0'/0");
    const { address } = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network: bitcoin.networks.bitcoin });
    // console.log(address);
        
    // Fetch name from database by address
    const result=this.#db.getData(`${address}`)
  
        // import Wallet by name 
    const response=await fetch(`https://api.blockcypher.com/v1/btc/main/wallets/${result.walletName}?token=${process.env.token}`,{
      method:'GET',
      headers:{
      'Content-Type':'application/json',
  },
  
  })
  const json =await response.json();
  console.log("import wallet Success");
  console.log(json);
}
catch{
  this.error("Import wallet failed")
}
       process.exit(1);
  }
}
