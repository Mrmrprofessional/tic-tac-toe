describe('Scores', function() {

  it("creates score objects", function() {
      var testScores = new Scores(1,2,3,4,5,6,7,8);
      expect(testScores.row1).to.equal(1);
      expect(testScores.row2).to.equal(2);
      expect(testScores.row3).to.equal(3);
      expect(testScores.col1).to.equal(4);
      expect(testScores.col2).to.equal(5);
      expect(testScores.col3).to.equal(6);
      expect(testScores.diag1).to.equal(7);
      expect(testScores.diag2).to.equal(8);
  });

  it("adds value to score based on grid location", function() {
     var testScores = new Scores(0, 0, 0, 0, 0, 0, 0, 0);
     testScores.addScore(5);
     expect(testScores.row2).to.equal(1);
     expect(testScores.col2).to.equal(1);
     expect(testScores.diag1).to.equal(1);
     expect(testScores.diag2).to.equal(1);
  });

  it("returns true if any group has a value of three", function() {
      var testScores = new Scores(0, 0, 0, 0, 0, 0, 0, 0);
      testScores.addScore(1);
      testScores.addScore(2);
      testScores.addScore(3);
      expect(testScores.findWinner()).to.equal(true);
  })
});
