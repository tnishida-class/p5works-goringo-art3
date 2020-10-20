// 小手調べ
function setup(){
  noFill();
    for(let x = 10; x < 60; x = x + 10){
    stroke(0, 0, 255);
    ellipse(50, 50, x, x);
  }
  for(let x = 60; x < 110; x = x +10){
    stroke(255, 0, 0);
    ellipse(50, 50, x, x);
  }
}
