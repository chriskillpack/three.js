/**
 * @author chriskillpack / http://chriskillpack.com/
 */

describe("Color", function() {
  var color;

  beforeEach(function() {
    color = new THREE.Color();
  });

  describe("copy()", function() {
    it ("configures itself from another instance", function() {
      var grey = new THREE.Color(0x808080);
      color.copy(grey);
      expect(color.hex).toEqual(0x808080);
    });
  });

  describe("clone()", function() {
    it ("duplicates an instance of itself", function() {
      var color = new THREE.Color(0xffffff);
      var color2 = color.clone();
      expect(color2).toEqual(color);
      expect(color2).not.toBe(color);
    });
  });
});
