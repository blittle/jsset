describe("setjs", function() {
    var mySet;

    beforeEach(function() {
        mySet = new Set();
    })

    it("should add numbers", function() {
        mySet.add(1);
        expect(mySet.size()).toBe(1);

        mySet.add(5);
        expect(mySet.size()).toBe(2);

        expect(mySet._objs[1]).toBe(5);
    });

    it('should add strings', function() {
        mySet.add("a")
             .add("b");

        expect(mySet.size()).toBe(2);
        expect(mySet._objs[1]).toBe('b');
    });

    it('should return contains', function() {
        mySet.add("a")
             .add("b");

        expect(mySet.contains("b")).toBeTruthy();
        expect(mySet.contains("c")).toBeFalsy();
    });

    it('should loop through elements', function() {
        mySet.add("a")
             .add("b");

        var mySpy = jasmine.createSpy("loop callback");

        mySet.each(mySpy);
        expect(mySpy).toHaveBeenCalled();        
        expect(mySpy).toHaveBeenCalledWith("a");
        expect(mySpy).toHaveBeenCalledWith("b");
        expect(mySpy).not.toHaveBeenCalledWith("c");
    });
});