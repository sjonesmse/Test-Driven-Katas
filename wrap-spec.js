const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  //check length of each line

  it('Breaks are at the correct spots', () => {
    expect(wrap('dlfjsl fjalf jsdf;dfdf sdfjsdfj', 10).indexOf('\n')).to.equal(
      6
    );
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });

  it('If current word length is greater than the maxLen, insert a break at the maxLen', () => {
    expect(wrap('aaaaaaaaa', 5)).to.equal('aaaaa\naaaa');
  });

  it('If the maxLen is zero, return the line', () => {
    expect(wrap('hello', 0)).to.equal('hello');
  })
});
