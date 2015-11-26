function run() {
    var inputs = readline();
    for (var i = 0; i < inputs; i++) {
        var size = readline(),
            result = Math.pow(size,2)*2+(size-2)*(size*2+2*(size-2));
        print(result);
    }
}