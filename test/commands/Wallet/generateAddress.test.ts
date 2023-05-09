import {expect, test} from '@oclif/test'

describe('Wallet/generateAddress', () => {
  test
  .stdout()
  .command(['Wallet/generateAddress'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Wallet/generateAddress', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
