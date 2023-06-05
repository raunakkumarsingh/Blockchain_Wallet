import {Args, Command, Flags} from '@oclif/core'

export default class WalletBtcBalance extends Command {
  static description = 'Getting bitcoin balance of a wallet'

  static examples = [
    '<%= config.bin %> <%= command.id %>  --address "Your wallet address"',
  ]

  static flags = {
    
    address: Flags.string({char: 'a', description: 'wallet address'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }



  public async run(): Promise<void> {
    const {args, flags} = await this.parse(WalletBtcBalance)

try{

    const response=await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${flags.address}/balance`,{
      method:'GET',
      headers:{},
  })
  const json =await response.json();
  console.log(`Account  balance : ${json.balance?json.balance:"0"} $`);
}
catch {
  this.error("Balance Fetched failed Please verify your address")
}
 process.exit(1)
   
  }
}
