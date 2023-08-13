describe('TwoPair', function () {
  const hand1 = '2H 3D 3S KC KD';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is TwoPair', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('TwoPair');
  });

  it('compositionWinnerHand contain K & 3', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('King');
    expect(compositionWinnerHand[1]).to.eql('3');
  });
});
describe('HighCard', function () {
  const hand1 = '2H 3D 5S 9C KD';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is HighCard', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('HighCard');
  });

  it('compositionWinnerHand contain As', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('As');
  });
});
describe('Flush', function () {
  const hand1 = '2H 3H 5H KH 8H';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    var jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is Flush', function () {
    var jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('Flush');
  });

  it('compositionWinnerHand contain Heart', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('Heart');
  });
});
describe('OnePair', function () {
  const hand1 = '2H 3D 5S KC KD';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is OnePair', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('OnePair');
  });

  it('compositionWinnerHand contain King', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('King');
  });
});
describe('ThreeOfAKind', function () {
  const hand1 = '2H 3D 5S KC KD';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is ThreeOfAKind', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('ThreeOfAKind');
  });

  it('compositionWinnerHand contain King', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('King');
  });
});
describe('FourOfAKind (Poker)', function () {
  const hand1 = '2H 2D 2S 2C KD';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is FourOfAKind', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('FourOfAKind');
  });

  it('compositionWinnerHand contain 2', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('2');
  });
});
describe('FullHouse', function () {
  const hand1 = '2H 2D KS KC KD';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is FullHouse', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('FullHouse');
  });

  it('compositionWinnerHand contain King & 2', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('2');
    expect(compositionWinnerHand[0]).to.eql('King');
  });
});
describe('Straight', function () {
  const hand1 = '2H 3D 4S 5C 6D';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is Straight', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('Straight');
  });

  it('compositionWinnerHand contain 2', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('2');
  });
});
describe('StraightFlush', function () {
  const hand1 = '2H 3H 4H 5H 6H';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is StraightFlush', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('StraightFlush');
  });

  it('compositionWinnerHand contain Heart', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('Heart');
  });
});
describe('RoyalFlush', function () {
  const hand1 = '10H JH QH KH AH';
  const hand2 = '2C 3H 4S 8C AH';
  it('hand1 win', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHand).to.eql('hand1');
  });

  it('winnerHandType is RoyalFlush', function () {
    const jsonData = poker(hand1, hand2);
    expect(jsonData.winnerHandType).to.eql('RoyalFlush');
  });

  it('compositionWinnerHand contain Heart', function () {
    const jsonData = poker(hand1, hand2);
    const compositionWinnerHand = jsonData.compositionWinnerHand;
    expect(compositionWinnerHand).to.be.an('array');
    expect(compositionWinnerHand[0]).to.eql('Heart');
  });
});
