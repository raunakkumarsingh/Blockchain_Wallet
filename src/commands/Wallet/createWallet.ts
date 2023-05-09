import {Args, Command, Flags} from '@oclif/core'
import DataDb from '../../lib/data-db'
import {Data} from '../../lib/data'
const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc)
require('dotenv').config();


// const btc = require('bitcoin-core');

export default class WalletCreateWallet extends Command {
   
  #db =new DataDb(this.config.dataDir)
 
  static description = 'Creating a Wallet'

  static examples = [
    '<%= config.bin %> <%= command.id %>  --name "Your Wallet Name"',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'Name of Wallet'}),
  
  }

  static args = {
    file: Args.string({description: 'Create Wallet'}),
  }

  public async run(): Promise<void> {

    const {args, flags} = await this.parse(WalletCreateWallet)
     
     try{
           // generate Mnemonic by bip39 and seed address 
      const mnemonic =  bip39.generateMnemonic();
  const seed = await bip39.mnemonicToSeedSync(mnemonic);
  const root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);
  const node = root.derivePath("m/49'/0'/0'/0");
  const { address } = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network: bitcoin.networks.bitcoin });

       // create wallet by name and address
  const response=await fetch(`https://api.blockcypher.com/v1/btc/main/wallets?token=${process.env.token}`,{
    method:'POST',
    headers:{
    'Content-Type':'application/json',
},

   body: JSON.stringify({"name": flags.name,"addresses": [address]})
})
const json =await response.json();
this.log("Wallet Created successfully")
console.log(json);
    // Store Data in local file based Database 
let data: Data ={
   walletName: json.name,
   mnemonic: mnemonic,
   address: address
}
      this.log("Data Stored in Database")
 const {id} =this.#db.createData(data)
//  console.log(id)
//  console.log(data)

     }
     catch{
      this.error("Creating Wallet failed Please try again")
     }
    

   process.exit(1);
  }
}
