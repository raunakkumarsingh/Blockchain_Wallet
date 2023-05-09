import {Args, Command, Flags} from '@oclif/core'

export default class WalletBtcTransaction extends Command {
  static description = 'Getting the list of bitcoin transactions of a wallet'

  static examples = [
    '<%= config.bin %> <%= command.id %> --address "Wallet address"',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    address: Flags.string({char: 'a', description: 'Wallet address'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(WalletBtcTransaction)
        try{
    const response=await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${flags.address}/full?before=300000`,{
      method:'GET',
      headers:{ },
  })
  const json =await response.json();
  // console.log(json.address)
  this.log("Transaction fetch Success");
  console.log({address:json.address,transaction:json.txs});

}
catch{
  this.error("Transaction fetch failed Please try again");
}
  process.exit(1);
   
  }
}
