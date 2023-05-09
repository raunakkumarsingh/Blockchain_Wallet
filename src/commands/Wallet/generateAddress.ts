import {Args, Command, Flags} from '@oclif/core'

export default class WalletGenerateAddress extends Command {
  static description = 'Generating an unused bitcoin address for a wallet'

  static examples = [
    '<%= config.bin %> <%= command.id %> --name "Wallet name"',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'Wallet name'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'Generate Address'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(WalletGenerateAddress)
    console.log(flags.name)
    // console.log(f)
    try{
    const response=await fetch(`https://api.blockcypher.com/v1/btc/main/wallets/${flags.name}/addresses/generate?token=${process.env.token}`,{
      method:'POST',
      headers:{
      'Content-Type':'application/json',
  },
  })

  const json =await response.json();
  this.log("Address generated Successfully")
  console.log(json);

}
catch {
  this.error("Address generation Failed");
}
   
  }
}
