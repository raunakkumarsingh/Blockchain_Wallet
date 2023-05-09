import {expect, test} from '@oclif/test'

describe('Wallet/btcBalance', () => {
  test
  .stdout()
  .command(['Wallet/btcBalance'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Wallet/btcBalance', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
