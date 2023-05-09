import {Args, Command, Flags} from '@oclif/core'
import DataDb from '../../lib/data-db'
import {Data} from '../../lib/data'

export default class WalletListWallet extends Command {
  #db =new DataDb(this.config.dataDir)
  static description = 'List of all Wallets'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
   
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(WalletListWallet)
 try{
  const tsk=this.#db.listData()
console.log(tsk);
 }
 catch{
  this.error("wallet Fetch Failed");
 }
   
process.exit(1);
  }
}
