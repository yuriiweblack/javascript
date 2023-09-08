

document.getElementById('changeColor').addEventListener('click', function () {
 // let color = randomColor()
 document.body.style.backgroundColor = randomColor();
})

function randomColor() {
 let elements = '0123456789ABCDE';
 let color = '#'

 for (let index = 0; index < 6; index++) {

  let gen_index = Math.floor(Math.random() * 15);

  let generate_elem = elements[gen_index];
  color += generate_elem;
  
 }
 console.log(Math.floor(Math.random()*15));
 return color;
}

