let x=1;
console.log(x);

function f(){
    let y;
    x=10;
    y=20;
    z=30;
    console.log(x);
    console.log(y);
    console.log(z);
    {
        let b =40;
        b++;
        console.log(b);
        {
            let c;
            c = 1;
        }
    }
}
f();
console.log(y);
console.log(x);