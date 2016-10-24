const con = require('../connectivity.js');

describe("QuickFind", function() {
  it("contains union function", function() {
    let qf = new con.QuickFind(10);
    expect(qf.connected(0,1)).toBe(false);
    qf.union(0, 1);
    expect(qf.connected(0,1)).toBe(true);
  });

});
