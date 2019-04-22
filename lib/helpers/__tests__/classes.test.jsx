import classes from '../classes';

describe('classes helper', () => {
  it('accept one classname', () => {
    expect(classes('a')).toEqual('a')
  })

  it('accept two classnames', () => {
    expect(classes('a', 'b')).toEqual('a b')
  })

  it('accept multiple classnames', () => {
    expect(classes('a', 'b', undefined, null)).toEqual('a b')
  })

  it('accept empty', () => {
    expect(classes('')).toEqual('')
  })

  it('accept one undefined', () => {
    expect(classes('a', undefined)).toEqual('a')
  })
})