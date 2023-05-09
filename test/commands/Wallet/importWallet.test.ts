import {expect, test} from '@oclif/test'

describe('Wallet/importWallet', () => {
  test
  .stdout()
  .command(['Wallet/importWallet'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Wallet/importWallet', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
