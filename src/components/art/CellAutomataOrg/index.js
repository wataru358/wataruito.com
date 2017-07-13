import React, { Component } from "react";
import styles from "./styles.css";


const colors = ["255, 235, 238", "255, 205, 210", "239, 154, 154", "229, 115, 115", "239, 83, 80", "244, 67, 54", "229, 57, 53", "211, 47, 47", "198, 40, 40", "183, 28, 28", "255, 138, 128", "255, 82, 82", "255, 23, 68", "213, 0, 0", "252, 228, 236", "248, 187, 208", "244, 143, 177", "240, 98, 146", "236, 64, 122", "233, 30, 99", "216, 27, 96", "194, 24, 91", "173, 20, 87", "136, 14, 79", "255, 128, 171", "255, 64, 129", "245, 0, 87", "197, 17, 98", "243, 229, 245", "225, 190, 231", "206, 147, 216", "186, 104, 200", "171, 71, 188", "156, 39, 176", "142, 36, 170", "123, 31, 162", "106, 27, 154", "74, 20, 140", "234, 128, 252", "224, 64, 251", "213, 0, 249", "170, 0, 255", "237, 231, 246", "209, 196, 233", "179, 157, 219", "149, 117, 205", "126, 87, 194", "103, 58, 183", "94, 53, 177", "81, 45, 168", "69, 39, 160", "49, 27, 146", "179, 136, 255", "124, 77, 255", "101, 31, 255", "98, 0, 234", "232, 234, 246", "197, 202, 233", "159, 168, 218", "121, 134, 203", "92, 107, 192", "63, 81, 181", "57, 73, 171", "48, 63, 159", "40, 53, 147", "26, 35, 126", "140, 158, 255", "83, 109, 254", "61, 90, 254", "48, 79, 254", "227, 242, 253", "187, 222, 251", "144, 202, 249", "100, 181, 246", "66, 165, 245", "33, 150, 243", "30, 136, 229", "25, 118, 210", "21, 101, 192", "13, 71, 161", "130, 177, 255", "68, 138, 255", "41, 121, 255", "41, 98, 255", "225, 245, 254", "179, 229, 252", "129, 212, 250", "79, 195, 247", "41, 182, 246", "3, 169, 244", "3, 155, 229", "2, 136, 209", "2, 119, 189", "1, 87, 155", "128, 216, 255", "64, 196, 255", "0, 176, 255", "0, 145, 234", "224, 247, 250", "178, 235, 242", "128, 222, 234", "77, 208, 225", "38, 198, 218", "0, 188, 212", "0, 172, 193", "0, 151, 167", "0, 131, 143", "0, 96, 100", "132, 255, 255", "24, 255, 255", "0, 229, 255", "0, 184, 212", "224, 242, 241", "178, 223, 219", "128, 203, 196", "77, 182, 172", "38, 166, 154", "0, 150, 136", "0, 137, 123", "0, 121, 107", "0, 105, 92", "0, 77, 64", "167, 255, 235", "100, 255, 218", "29, 233, 182", "0, 191, 165", "232, 245, 233", "200, 230, 201", "165, 214, 167", "129, 199, 132", "102, 187, 106", "76, 175, 80", "67, 160, 71", "56, 142, 60", "46, 125, 50", "27, 94, 32", "185, 246, 202", "105, 240, 174", "0, 230, 118", "0, 200, 83", "241, 248, 233", "220, 237, 200", "197, 225, 165", "174, 213, 129", "156, 204, 101", "139, 195, 74", "124, 179, 66", "104, 159, 56", "85, 139, 47", "51, 105, 30", "204, 255, 144", "178, 255, 89", "118, 255, 3", "100, 221, 23", "249, 251, 231", "240, 244, 195", "230, 238, 156", "220, 231, 117", "212, 225, 87", "205, 220, 57", "192, 202, 51", "175, 180, 43", "158, 157, 36", "130, 119, 23", "244, 255, 129", "238, 255, 65", "198, 255, 0", "174, 234, 0", "255, 253, 231", "255, 249, 196", "255, 245, 157", "255, 241, 118", "255, 238, 88", "255, 235, 59", "253, 216, 53", "251, 192, 45", "249, 168, 37", "245, 127, 23", "255, 255, 141", "255, 255, 0", "255, 234, 0", "255, 214, 0", "255, 248, 225", "255, 236, 179", "255, 224, 130", "255, 213, 79", "255, 202, 40", "255, 193, 7", "255, 179, 0", "255, 160, 0", "255, 143, 0", "255, 111, 0", "255, 229, 127", "255, 215, 64", "255, 196, 0", "255, 171, 0", "255, 243, 224", "255, 224, 178", "255, 204, 128", "255, 183, 77", "255, 167, 38", "255, 152, 0", "251, 140, 0", "245, 124, 0", "239, 108, 0", "230, 81, 0", "255, 209, 128", "255, 171, 64", "255, 145, 0", "255, 109, 0", "251, 233, 231", "255, 204, 188", "255, 171, 145", "255, 138, 101", "255, 112, 67", "255, 87, 34", "244, 81, 30", "230, 74, 25", "216, 67, 21", "191, 54, 12", "255, 158, 128", "255, 110, 64", "255, 61, 0", "221, 44, 0", "239, 235, 233", "215, 204, 200", "188, 170, 164", "161, 136, 127", "141, 110, 99", "121, 85, 72", "109, 76, 65", "93, 64, 55", "78, 52, 46", "62, 39, 35", "250, 250, 250", "245, 245, 245", "238, 238, 238", "224, 224, 224", "189, 189, 189", "158, 158, 158", "117, 117, 117", "97, 97, 97", "66, 66, 66", "33, 33, 33", "236, 239, 241", "207, 216, 220", "176, 190, 197", "144, 164, 174", "120, 144, 156", "96, 125, 139", "84, 110, 122", "69, 90, 100", "55, 71, 79", "38, 50, 56", "255, 255, 255", "0, 0, 0"];


/*
const colors = ["255,255,255","255, 235, 238", "255, 205, 210", "239, 154, 154", "229, 115, 115", "239, 83, 80", "244, 67, 54", "229, 57, 53", "211, 47, 47", "198, 40, 40", "183, 28, 28", "255, 138, 128", "255, 82, 82", "255, 23, 68", "213, 0, 0", "252, 228, 236", "248, 187, 208", "244, 143, 177", "240, 98, 146", "236, 64, 122", "233, 30, 99", "216, 27, 96", "194, 24, 91", "173, 20, 87", "136, 14, 79"];
*/

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


class CellAutomataOrg extends Component {
  constructor () {
    super();
    this.state = {
      backgroundColor:'rgba(255,255,255, 1)'
    }
  }
  componentDidMount() {
    this.prepare();
  }
  updateStripeColor(){
    // for now, we use rgba to quickly manipulate the intencity of the colors
    this.setState(
      {
        backgroundColor:'rgba('+ colors[ randomNum(0,colors.length) ] +', .25)'
      }
    );
  }
  // this one is going to ugly
  // basically, expose canvas and directly draw on it,
  // rather than having state.
  prepare() {

    // getting window width and height, safe way
    let w = window,
    d = document,
    e = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || body.clientWidth,
    bodyHeight = w.innerHeight|| e.clientHeight|| body.clientHeight;

    // temp
    this.surfaceOne.width = (bodyWidth / 2).toString();
    this.surfaceOne.height = bodyHeight.toString();

    this.surfaceTwo.width = (bodyWidth / 2).toString();
    this.surfaceTwo.height = bodyHeight.toString();

    this.surfaceTwo.style.transform = 'scale(-1, 1)';
    this.surfaceTwo.style.filter = 'FlipH';

    let width = bodyWidth / 2,
    height = bodyHeight;

    // get base size for "cell"
    this.cellSize;
    let columns = 30;
    this.cellSize =  Math.floor( width / columns) + 1;
    let rows = Math.floor( height / this.cellSize) + 1;
/*
    console.log('width: ', width);
    console.log('height: ', height);
    console.log('columns: ', columns);
    console.log('rows: ', rows);
    console.log('this.cellSize: ', this.cellSize);
*/

    this.contextOne = this.surfaceOne.getContext('2d');
    this.contextTwo = this.surfaceTwo.getContext('2d');

    // this.surfaceTwo.scla
    // this.contextTwo.scale(-1, 1);

    this.canvasWidth = this.surfaceOne.width;
    this.canvasHeight = this.surfaceOne.height;

    let cellWidth = this.cellSize,
      cellHeight = this.cellSize;

    //update function uses below
    this.cell;

    this.rAve;
    this.gAve;
    this.bAve;
    this.rVelAve;
    this.gVelAve;
    this.bVelAve;
      //ease = 0.67,
    this.ease = 0.5;
    this.rv;
    this.gv;
    this.bv;
    this.mag;
    this.rAccel;
    this.gAccel;
    this.bAccel;
    this.rSep;
    this.gSep;
    this.bSep;
    this.velMax = 255;
    this.minDist = 8;
    this.minDistSquare = this.minDist * this.minDist;
    this.dr;
    this.dg;
    this.db;

    this.neighbor;
    this.neighborPointer;
    this.f;
    this.sepMagRecip;
    this.sepNormMag = 4;

      //then create cell
      let r,g,b,
      cellArray = [];
      this.cellList = {};
      for(let i = 0; i < columns; i++ ){
        cellArray.push([]);
        for(let j = 0; j < rows; j++ ) {

          r = randomNum(40,77);
  				g = randomNum(60,155);
  				b = randomNum(111,255);
          let newCell = {
            x: i * this.cellSize,
            y: j * this.cellSize,
            r: r,
            g: g,
            b: b,
            bufferR: r,
            bufferG: g,
            bufferB: b,
            rVel: 0,
            gVel: 0,
            bVel: 0,
            bufferRVel: 0,
            bufferGVel: 0,
            bufferBVel: 0,
            neighbors: [],
            neighborPointerList: {}
          }

          //set neighbors
  				if (i > 0) {
  					newCell.neighbors.push(cellArray[i-1][j]);
  					cellArray[i-1][j].neighbors.push(newCell);
  				}
  				if (j > 0) {
  					newCell.neighbors.push(cellArray[i][j-1]);
  					cellArray[i][j-1].neighbors.push(newCell);
  				}
          //store cells in a 2D array only for the sake of setting neighbors
  				cellArray[i].push(newCell);

          //store cells in a more efficient linked list, for use in update loop
  				if ((i == 0) && (j == 0)) {
  					this.cellList.first = newCell;
  				}
  				else {
  					newCell.next = this.cellList.first;
  					this.cellList.first = newCell;
  				}
        }
      }
      //convert neighbor arrays to linked lists - linked list just has pointer objects.
  		this.cell = this.cellList.first;
  		let numNeighbors, i;
      while (this.cell != null) {
  			numNeighbors = 1;
  			this.cell.neighborPointerList.first = {};
  			this.cell.neighborPointerList.first.neighbor = this.cell.neighbors[0];
  			for (i = 1; i < this.cell.neighbors.length; i++) {
  				let newPointer = {};
  				newPointer.next = this.cell.neighborPointerList.first;
  				this.cell.neighborPointerList.first = newPointer;
  				newPointer.neighbor = this.cell.neighbors[i];
  				++numNeighbors;
  			}
  			this.cell.numNeighbors = numNeighbors;
  			this.cell = this.cell.next;
  		}

      this.init();

  }
  // maybe init might not be needed.
  // just my pref doing in this way :)
  init() {
    // prod
    this.intervalID = setInterval(this.update.bind(this), 1000/30);
    this.updateStripeColor();
    this.setIntervalStripeBGID = setInterval(this.updateStripeColor.bind(this),3333);
    // debug
    //this.intervalID = setTimeout(this.update.bind(this), 1000/30);
  }
  componentWillUnmount() {
    // clean up after yourself ;)
    clearInterval(this.intervalID);
    clearInterval(this.setIntervalStripeBGID);
  }
  update() {
    this.cell = this.cellList.first;
		while (this.cell != null) {
			this.rAve = 0;
			this.gAve = 0;
			this.bAve = 0;
			this.rVelAve = 0;
			this.gVelAve = 0;
			this.bVelAve = 0;
			this.rSep = 0;
			this.gSep = 0;
			this.bSep = 0;
			this.neighborPointer = this.cell.neighborPointerList.first;
			while (this.neighborPointer != null) {
				this.neighbor = this.neighborPointer.neighbor;
				this.rAve += this.neighbor.r;
				this.gAve += this.neighbor.g;
				this.bAve += this.neighbor.b;
				this.rVelAve += this.neighbor.rVel;
				this.gVelAve += this.neighbor.gVel;
				this.bVelAve += this.neighbor.bVel;
				this.dr = this.cell.r - this.neighbor.r;
				this.dg = this.cell.g - this.neighbor.g;
				this.db = this.cell.b - this.neighbor.b;
				if (this.dr*this.dr + this.dg*this.dg + this.db*this.db < this.minDistSquare) {
					this.rSep += this.dr;
					this.gSep += this.dg;
					this.bSep += this.db;
				}
				this.neighborPointer = this.neighborPointer.next;
			}

			this.rAve *= (this.f = 1/this.cell.numNeighbors);
			this.gAve *= this.f;
			this.bAve *= this.f;
			this.rVelAve *= this.f;
			this.gVelAve *= this.f;
			this.bVelAve *= this.f;

			//normalize separation vector
			if ((this.rSep != 0) || (this.gSep != 0) || (this.bSep != 0)) {
				this.rSep *= (this.sepMagRecip = this.sepNormMag/Math.sqrt(this.rSep*this.rSep + this.gSep*this.gSep + this.bSep*this.bSep));
				this.gSep *= this.sepMagRecip;
				this.bSep *= this.sepMagRecip;
			}

			//Update velocity by combining separation, alignment and cohesion effects. Change velocity only by 'ease' ratio.
			this.cell.bufferRVel += this.ease*(this.rSep + this.rVelAve + this.rAve - this.cell.r - this.cell.bufferRVel);
			this.cell.bufferGVel += this.ease*(this.gSep + this.gVelAve + this.gAve - this.cell.g - this.cell.bufferGVel);
			this.cell.bufferBVel += this.ease*(this.bSep + this.bVelAve + this.bAve - this.cell.b - this.cell.bufferBVel);


			//Code for clamping velocity commented out because in my testing, the velocity never went over the max. (But you may wish to restore this
			//code if you experiment with different parameters.)
			/*
			if ((mag = Math.sqrt(cell.bufferRVel*cell.bufferRVel + cell.bufferGVel*cell.bufferGVel + cell.bufferBVel*cell.bufferBVel))> velMax) {
				cell.bufferRVel *= (f = velMax/mag);
				cell.bufferGVel *= f;
				cell.bufferBVel *= f;
				Debugger.log("clamped");
			}
			*/

			//update colors according to color velocities
			this.cell.bufferR += this.cell.bufferRVel;
			this.cell.bufferG += this.cell.bufferGVel;
			this.cell.bufferB += this.cell.bufferBVel;

			//bounce colors off of color cube boundaries
			if (this.cell.bufferR < 0) {
				this.cell.bufferR = 0;
				this.cell.bufferRVel *= -1;
			}
			else if (this.cell.bufferR > 255) {
				this.cell.bufferR = 255;
				this.cell.bufferRVel *= -1;
			}
			if (this.cell.bufferG < 0) {
				this.cell.bufferG = 0;
				this.cell.bufferGVel *= -1;
			}
			else if (this.cell.bufferG > 255) {
				this.cell.bufferG = 255;
				this.cell.bufferGVel *= -1;
			}
			if (this.cell.bufferB < 0) {
				this.cell.bufferB = 0;
				this.cell.bufferBVel *= -1;
			}
			else if (this.cell.bufferB > 255) {
				this.cell.bufferB = 255;
				this.cell.bufferBVel *= -1;
			}

			this.cell = this.cell.next;
		}

		//now loop through again, copy buffer values and draw
		this.cell = this.cellList.first;
    // prod
    while (this.cell != null) {

    // debug
    //let test = 50;
    //while (test > 0) {
      //test--;
			this.cell.r = this.cell.bufferR;
			this.cell.g = this.cell.bufferG;
			this.cell.b = this.cell.bufferB;
			this.cell.rVel = this.cell.bufferRVel;
			this.cell.gVel = this.cell.bufferGVel;
			this.cell.bVel = this.cell.bufferBVel;
			this.contextOne.fillStyle = "rgb(" + ~~this.cell.r + "," + ~~this.cell.g + "," + ~~this.cell.b +")";
			this.contextOne.fillRect(this.cell.x, this.cell.y, this.cellSize, this.cellSize);
      // console.log("this.contextOne.fillRect(",this.cell.x, this.cell.y, this.cellSize, this.cellSize,");")
			this.cell = this.cell.next;
		}
    // copy surfaceOne to surfaceTwo
    // surfaceTwo is flipped via CSS
    //this.contextTwo.scale(-1,1);
    this.contextTwo.drawImage(this.surfaceOne,0,0);
  }
  render() {
    return (
      <div className={styles.main}>
        <canvas
          className={styles.surface}
          ref={(elm) => { this.surfaceOne = elm; }}
        />
        <div className={styles.stripeWrapper}>
          <div className={styles.stripe} style={
            {
              backgroundColor:this.state.backgroundColor
            }
          }></div>
        </div>
        <canvas
          className={styles.surface + ' ' + styles.surfaceTwo}
          ref={(elm) => { this.surfaceTwo = elm; }}
        />
      </div>

    )
  }
}

export default CellAutomataOrg
