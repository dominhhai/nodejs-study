var x = 10

console.log('global: ' + this.x)

function callMe() {
    var x = 100
    console.log('callMe: ' + x)
}

function main() {
    console.log('main: ' + x)
    
    eval("callMe()")
}

var obj = {
    x: 69,
    func: function() {
        console.log('global: ' + x)
        console.log('obj: ' + this.x)        
    }
}

main()

obj.func()