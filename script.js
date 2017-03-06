TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
 
function rectangle(){
forward(50);
right(90);
forward(90);
right(90);
forward(50);
right(90);
forward(90);
}

function triangle(x){
right(60);
forward(x);
right(120);
forward(x);
right(120);
forward(x);
}

function house(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(60);
forward(25);
right(55);
forward(30);

}
triangle(70);

triangle(100);

triangle(200);

// Type your function call below
/*square();
rectangle();
triangle();
house();
*/
stamp();
