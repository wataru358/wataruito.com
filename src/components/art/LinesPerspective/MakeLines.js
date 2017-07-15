/*
 * referanced from : http://qiita.com/nekoneko-wanwan/items/0911a59bf835d5b9e35a
 */


const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
/**
 * get position on circumference
 * @param d degree
 * @param r radius
 * @param cx, cy central x and y
 */
const getCircumPosX = (d, r, cx) => Math.cos(Math.PI / 180 * d) * r + cx;
const getCircumPosY = (d, r, cy) => Math.sin(Math.PI / 180 * d) * r + cy;


const defaultConfig = {
  lineWidth:30,
  lineNum:200,
  circleRadiusMax:200, // 集中線の円形の半径上限
  circleRadiusMin:150, // 集中線の円形の半径下限
  lineColor:'#000'
}
/*cx: cs.width / 2,
cy: cs.height / 2,
*/

class DrawOneLine {
  constructor(config,ctx) {
    this.config = config;
    this.deg = randomNum(359, 0);
    this.ctx = ctx;
  }
  setPos() {
      this.moveDeg   = this.deg + (randomNum(this.config.lineWidth, 1) / 10);
      this.endRadius = randomNum(this.config.circleRadiusMax, this.config.circleRadiusMin);

      // start pos
      this.startPos = {
          x: getCircumPosX(this.deg, this.config.canvasRadius, this.config.centerX),
          y: getCircumPosY(this.deg, this.config.canvasRadius, this.config.centerY)
      };

      // moved pos
      this.movePos = {
          x: getCircumPosX(this.moveDeg, this.config.canvasRadius, this.config.centerX),
          y: getCircumPosY(this.moveDeg, this.config.canvasRadius, this.config.centerY)
      };

      // end pos
      this.endPos = {
          x: getCircumPosX(this.moveDeg, this.endRadius, this.config.centerX),
          y: getCircumPosY(this.moveDeg, this.endRadius, this.config.centerY)
      };
  }
  update() {
      this.setPos();
  }
  draw() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 1;
      this.ctx.fillStyle = this.config.lineColor;
      this.ctx.moveTo(this.startPos.x, this.startPos.y);
      this.ctx.lineTo(this.movePos.x,  this.movePos.y);
      this.ctx.lineTo(this.endPos.x,   this.endPos.y);
      this.ctx.fill();
      this.ctx.closePath();
  }
  render() {
      this.update();
      this.draw();
  }

}


class MakeLines {
  constructor(trgtCanvas, config = defaultConfig) {
    if(typeof trgtCanvas === 'undefined') {
      throw 'the target canvas is not specified. Please specify the target canvas.';
    } else if (trgtCanvas.tagName !== 'CANVAS') {
      throw 'the target is not canvas element. Please specify canvas element.';
    }



    this.trgtCanvas = trgtCanvas;
    this.ctx = this.trgtCanvas.getContext('2d');
    this.lines = [];

    this.config = config;
    this.config.centerX = trgtCanvas.width / 2;
    this.config.centerY = trgtCanvas.height / 2;

    this.config.centralX = this.trgtCanvas / 2;
    this.config.centralY = this.trgtCanvas / 2;

    this.config.canvasRadius = Math.sqrt(Math.pow(this.trgtCanvas.width / 2, 2) + Math.pow(this.trgtCanvas.height / 2, 2)) | 0;

    // canvasの中心から角までの斜辺距離を円の半径とする
    // 中心をズラす場合は、もっと大きな値を設定してやる（引数でできるようにすべきか）
    this.config.csRadius = Math.sqrt(Math.pow(trgtCanvas.width / 2, 2) + Math.pow(trgtCanvas.height / 2, 2)) | 0;

    this.createLines(this.config.lineNum);
  }
  createLines(lineNum){
    for (let i = 0; i < lineNum; i++) {
        this.lines.push(new DrawOneLine(this.config,this.ctx));
    }
  }
  draw() {
    this.ctx.clearRect(0, 0, this.trgtCanvas.width, this.trgtCanvas.height);
    for (let i = 0; i < this.lines.length; i++) {
        this.lines[i].render();
    }
  }
  start() {
    this.intervalID = setInterval(this.render.bind(this),100);
  }
  render() {
    //this.update();
    this.draw();
  }
  stop() {
    clearInterval(this.intervalID);
  }
}
export default MakeLines
