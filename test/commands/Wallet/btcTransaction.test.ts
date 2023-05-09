import {expect, test} from '@oclif/test'

describe('Wallet/btcTransaction', () => {
  test
  .stdout()
  .command(['Wallet/btcTransaction'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Wallet/btcTransaction', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
