import BetterSqlite3 from 'better-sqlite3'
import {Data} from './data'
import path from 'node:path'
import {existsSync,mkdirSync} from 'node:fs'


export default class DataDb{
    #client :BetterSqlite3.Database
 
    constructor(dataDir:string){
             if(!existsSync(dataDir)){
                mkdirSync(dataDir,{recursive:true})
             }

        this.#client =new BetterSqlite3(path.join(dataDir,'data.db'))
        this.setup();
    }
    setup():void{
        this.#client.exec(`
            CREATE TABLE IF NOT EXISTS data (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                walletName TEXT NOT NULL,
                mnemonic TEXT NOT NULL,
                address TEXT NOT NULL
            )
        `)
    }

    createData(data:Data): Data {
        const stmt =this.#client.prepare(`
        INSERT INTO data (walletName,mnemonic,address)
        VALUES (@walletName,@mnemonic,@address)
        `)

        const info =stmt.run(data)
        return {...data, id: info.lastInsertRowid}
    }
     listData(): Data[] {
        const stmt =this.#client.prepare(`
       SELECT * FROM data
        `)
        return stmt.all() as Data[];
     }
      getData(address:string):  Data {

        const stmt=this.#client.prepare(`
        SELECT * FROM data WHERE address = ? `);

        return stmt.get(address) as Data;
      }
    
    // createData(data:Data): Data {}
    //  listData(): Data[] {}
    //  getData(id:number): Data {}

}