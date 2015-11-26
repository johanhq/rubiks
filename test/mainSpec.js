describe('Testing outputs:', function() {
    var inputs = [],
        output = [],
        result = [];
    readline = function(){};
    print = function(){};

    function addToResult(num) {
        result.push(num);
    }

    function createInputs(num) {
        var i= 0,
            tmp = [];
        tmp.push(num);
        for(;i<num;) {
            tmp.push(2+i++);
        }
        return tmp;
    }

    beforeEach(function() {
        result = [];
        inputs = [];
        output = [
            8,
            26,
            56,
            98,
            152,
            218,
            296,
            386,
            488,
            602,
            728,
            866,
            1016,
            1178,
            1352,
            1538,
            1736,
            1946,
            2168,
            2402,
            2648,
            2906,
            3176,
            3458,
            3752,
            4058,
            4376,
            4706,
            5048,
            5402,
            5768,
            6146,
            6536,
            6938,
            7352,
            7778,
            8216,
            8666,
            9128,
            9602
        ];
    });

    it("Expect readline to be called", function() {
        spyOn(window, 'readline');
        run();
        expect(window.readline).toHaveBeenCalled();
    });

    it('should work with 3 sizes', function() {
        output = output.slice(0,3);
        inputs = createInputs(3);

        spyOn(window, 'readline').and.callFake(function() {
            return inputs.shift();
        });

        spyOn(window, "print").and.callFake(addToResult);

        run();

        expect(output).toEqual(result);
    });

    it('should work with 40 sizes', function() {
        output = output.slice(0,40);
        inputs = createInputs(40);

        spyOn(window, 'readline').and.callFake(function() {
            return inputs.shift();
        });

        spyOn(window, "print").and.callFake(addToResult);

        run();

        expect(output).toEqual(result);
    });
});


