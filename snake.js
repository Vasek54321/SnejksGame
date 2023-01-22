function Snake() {
  //promenne
    this.x = 600;
    this.y = 400;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.score = 0;
    this.tail = [];
  
  //funkce na jezení a počítání score
    this.eat = function(pos) {
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        this.score++;
        score.innerText = ("Score: ");
        score.innerText += (this.score);
        return true;
      } else {
        return false;
      }
    }
  
    this.dir = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    }
  
  //funkce na smrt hada
    this.death = function() {
      for (var i = 0; i < this.tail.length; i++) {
        var pos = this.tail[i];
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
          gameover.innerText = ("GAME OVER");
          this.xspeed = x;
          this.yspeed = y;
        }
      }
    }
  
  
    this.update = function() {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
      }
  
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;
  
      this.x = constrain(this.x, 0, width - scl);
      this.y = constrain(this.y, 0, height - scl);
    }
  //vykresleni hada
    this.show = function() {
      fill(0, 255, 0);
      for (var i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      rect(this.x, this.y, scl, scl);
  
    }
  }