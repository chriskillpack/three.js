/**
 * @author chriskillpack / http://chriskillpack.com/
 */

describe("UV", function() {
  var uv;
  
  beforeEach(function() {
    uv = new THREE.UV();
  });

  it("assumes zero values if not specified", function() {
    expect(uv.u).toEqual(0);
    expect(uv.v).toEqual(0);
  });

  describe("copy()", function() {
    it ("duplicates state from another instance", function() {
      uv.set(1, 2);
      var uv2 = new THREE.UV().copy(uv);
      expect(uv2).toEqual(uv);
      expect(uv2).not.toBe(uv);
    });
  });
});