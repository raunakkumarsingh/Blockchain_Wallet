import {expect, test} from '@oclif/test'

describe('Wallet/listWallet', () => {
  test
  .stdout()
  .command(['Wallet/listWallet'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Wallet/listWallet', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
