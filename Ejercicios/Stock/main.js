function stack() {
    this.data = new Array();
    this.sp = 0;
    this.push = push;
    this.pop = pop;
    window.status = "Constructor";
}

// Botones para el uso del Stack

function push(x) {
    if (this.sp < 10)
        this.data[this.sp++] = x;
    else
        alert("Stack Overflow");
}

function pop() {
    if (this.sp > 0)
        return (this.data[--this.sp]);
    else
        alert("Stack Underflow");
}
// INSTANCIAR DOS OBJETOS DE TIPO STACK

var a = new stack();
var b = new stack();
