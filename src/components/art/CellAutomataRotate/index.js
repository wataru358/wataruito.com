import React, { Component } from "react"
import styles from "./styles.css"

const colors = ["255, 235, 238", "255, 205, 210", "239, 154, 154", "229, 115, 115", "239, 83, 80", "244, 67, 54", "229, 57, 53", "211, 47, 47", "198, 40, 40", "183, 28, 28", "255, 138, 128", "255, 82, 82", "255, 23, 68", "213, 0, 0", "252, 228, 236", "248, 187, 208", "244, 143, 177", "240, 98, 146", "236, 64, 122", "233, 30, 99", "216, 27, 96", "194, 24, 91", "173, 20, 87", "136, 14, 79", "255, 128, 171", "255, 64, 129", "245, 0, 87", "197, 17, 98", "243, 229, 245", "225, 190, 231", "206, 147, 216", "186, 104, 200", "171, 71, 188", "156, 39, 176", "142, 36, 170", "123, 31, 162", "106, 27, 154", "74, 20, 140", "234, 128, 252", "224, 64, 251", "213, 0, 249", "170, 0, 255", "237, 231, 246", "209, 196, 233", "179, 157, 219", "149, 117, 205", "126, 87, 194", "103, 58, 183", "94, 53, 177", "81, 45, 168", "69, 39, 160", "49, 27, 146", "179, 136, 255", "124, 77, 255", "101, 31, 255", "98, 0, 234", "232, 234, 246", "197, 202, 233", "159, 168, 218", "121, 134, 203", "92, 107, 192", "63, 81, 181", "57, 73, 171", "48, 63, 159", "40, 53, 147", "26, 35, 126", "140, 158, 255", "83, 109, 254", "61, 90, 254", "48, 79, 254", "227, 242, 253", "187, 222, 251", "144, 202, 249", "100, 181, 246", "66, 165, 245", "33, 150, 243", "30, 136, 229", "25, 118, 210", "21, 101, 192", "13, 71, 161", "130, 177, 255", "68, 138, 255", "41, 121, 255", "41, 98, 255", "225, 245, 254", "179, 229, 252", "129, 212, 250", "79, 195, 247", "41, 182, 246", "3, 169, 244", "3, 155, 229", "2, 136, 209", "2, 119, 189", "1, 87, 155", "128, 216, 255", "64, 196, 255", "0, 176, 255", "0, 145, 234", "224, 247, 250", "178, 235, 242", "128, 222, 234", "77, 208, 225", "38, 198, 218", "0, 188, 212", "0, 172, 193", "0, 151, 167", "0, 131, 143", "0, 96, 100", "132, 255, 255", "24, 255, 255", "0, 229, 255", "0, 184, 212", "224, 242, 241", "178, 223, 219", "128, 203, 196", "77, 182, 172", "38, 166, 154", "0, 150, 136", "0, 137, 123", "0, 121, 107", "0, 105, 92", "0, 77, 64", "167, 255, 235", "100, 255, 218", "29, 233, 182", "0, 191, 165", "232, 245, 233", "200, 230, 201", "165, 214, 167", "129, 199, 132", "102, 187, 106", "76, 175, 80", "67, 160, 71", "56, 142, 60", "46, 125, 50", "27, 94, 32", "185, 246, 202", "105, 240, 174", "0, 230, 118", "0, 200, 83", "241, 248, 233", "220, 237, 200", "197, 225, 165", "174, 213, 129", "156, 204, 101", "139, 195, 74", "124, 179, 66", "104, 159, 56", "85, 139, 47", "51, 105, 30", "204, 255, 144", "178, 255, 89", "118, 255, 3", "100, 221, 23", "249, 251, 231", "240, 244, 195", "230, 238, 156", "220, 231, 117", "212, 225, 87", "205, 220, 57", "192, 202, 51", "175, 180, 43", "158, 157, 36", "130, 119, 23", "244, 255, 129", "238, 255, 65", "198, 255, 0", "174, 234, 0", "255, 253, 231", "255, 249, 196", "255, 245, 157", "255, 241, 118", "255, 238, 88", "255, 235, 59", "253, 216, 53", "251, 192, 45", "249, 168, 37", "245, 127, 23", "255, 255, 141", "255, 255, 0", "255, 234, 0", "255, 214, 0", "255, 248, 225", "255, 236, 179", "255, 224, 130", "255, 213, 79", "255, 202, 40", "255, 193, 7", "255, 179, 0", "255, 160, 0", "255, 143, 0", "255, 111, 0", "255, 229, 127", "255, 215, 64", "255, 196, 0", "255, 171, 0", "255, 243, 224", "255, 224, 178", "255, 204, 128", "255, 183, 77", "255, 167, 38", "255, 152, 0", "251, 140, 0", "245, 124, 0", "239, 108, 0", "230, 81, 0", "255, 209, 128", "255, 171, 64", "255, 145, 0", "255, 109, 0", "251, 233, 231", "255, 204, 188", "255, 171, 145", "255, 138, 101", "255, 112, 67", "255, 87, 34", "244, 81, 30", "230, 74, 25", "216, 67, 21", "191, 54, 12", "255, 158, 128", "255, 110, 64", "255, 61, 0", "221, 44, 0", "239, 235, 233", "215, 204, 200", "188, 170, 164", "161, 136, 127", "141, 110, 99", "121, 85, 72", "109, 76, 65", "93, 64, 55", "78, 52, 46", "62, 39, 35", "250, 250, 250", "245, 245, 245", "238, 238, 238", "224, 224, 224", "189, 189, 189", "158, 158, 158", "117, 117, 117", "97, 97, 97", "66, 66, 66", "33, 33, 33", "236, 239, 241", "207, 216, 220", "176, 190, 197", "144, 164, 174", "120, 144, 156", "96, 125, 139", "84, 110, 122", "69, 90, 100", "55, 71, 79", "38, 50, 56", "255, 255, 255", "0, 0, 0"];


/*
const colors = ["255,255,255","255, 235, 238", "255, 205, 210", "239, 154, 154", "229, 115, 115", "239, 83, 80", "244, 67, 54", "229, 57, 53", "211, 47, 47", "198, 40, 40", "183, 28, 28", "255, 138, 128", "255, 82, 82", "255, 23, 68", "213, 0, 0", "252, 228, 236", "248, 187, 208", "244, 143, 177", "240, 98, 146", "236, 64, 122", "233, 30, 99", "216, 27, 96", "194, 24, 91", "173, 20, 87", "136, 14, 79"];
*/

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class CellAutomataRotate extends Component {
  constructor () {
    super();

    // getting window width and height, safe way
    let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;

    // we need about 38 col * 28 row or similar.
    // This would give us something close to 1.35 ratio.
    // Also this Keep the div count around 1k.

    // first, check orientation
    // this is not just for a mobile, so we do it manually
    let orientation;
    if(width < height) {

      orientation = 'portrait';

    } else {

      orientation = 'landscape';

    }

    // assign clumns and rows.
    // this is for div distribution on 2 dimentional matrix
    let columns;
    let rows;

    // get base size for "cell" div
    let baseSize;

    if(orientation === 'landscape') {

      columns = 38;
      rows = 28;

      // just getting baseSize which is slightly smaller than
      // the exact number we can get by 100 / columns
      // this is to fit every div inside wrapper nicely
      baseSize =  (Math.floor( (100 / columns) * 10 ) / 10).toString() + 'vw';

    } else {

      columns = 28;
      rows = 38;

      baseSize = (Math.floor( (100 / rows) * 10 ) / 10).toString() + 'vh';
    }




    // creating "cells"
    let r;
    let cellArray = [];
    let cellList = {};

    for(let i = 0; i < rows; i++) {
      cellArray.push([]);
      for(let j = 0; j < columns; j++ ) {
        r = Math.random()*359;

        let newCell = {
          x: j,
          y: i,
          r: r,
          bufferR: r,
          rVel: 0,
          bufferRVel: 0,
          neighbors: [],
          neighborPointerList: {}
        }

        if (i > 0) {
					newCell.neighbors.push(cellArray[i-1][j]);
					cellArray[i-1][j].neighbors.push(newCell);
				}
				if (j > 0) {
					newCell.neighbors.push(cellArray[i][j-1]);
					cellArray[i][j-1].neighbors.push(newCell);
				}
        //store cells in a 2D array
				cellArray[i].push(newCell);

        //store cells in a inked list, for use in update loop
				if ((i == 0) && (j == 0)) {

          cellList.first = newCell;

				}	else {

					newCell.next = cellList.first;
					cellList.first = newCell;

				}
        //convert neighbor arrays to linked lists - linked list just has pointer objects.
        let cell = cellList.first;
        let numNeighbors;
        while (cell != null) {
          numNeighbors = 1;
          cell.neighborPointerList.first = {};
          cell.neighborPointerList.first.neighbor = cell.neighbors[0];

          for (let i = 1; i < cell.neighbors.length; i++) {
            var newPointer = {};
            newPointer.next = cell.neighborPointerList.first;
            cell.neighborPointerList.first = newPointer;
            newPointer.neighbor = cell.neighbors[i];
            ++numNeighbors;
          }
          cell.numNeighbors = numNeighbors;
          cell = cell.next;
        }
      }
    }


    this.state = {
      columns,
      rows,
      baseSize,
      cellArray,
      cellList,
      backgroundColor:'rgb(255,255,255)'
    }


    //console.log(this.state);
  }
  updateBackgroundColor(){
    // for now, we use rgba to quickly manipulate the intencity of the colors
    this.setState(
      {
        backgroundColor:'rgba('+ colors[ randomNum(0,colors.length) ] +', .15)'
      }
    );

  }
  update(){
    let rAve,
    rVelAve,
    //ease = 0.67,
    ease = 0.5,
    //ease = 0.34,
    //ease = 0.423,
    //ease = 0.22,
    rSep,
    minDist = 8,
    minDistSquare = minDist * minDist,
    dr,
    neighbor,
    neighborPointer,
    f,
    sepNormMag = 4;
    var sepMagRecip = 0; // @todo double check

    let cellList = this.state.cellList;
    let cellArray = this.state.cellArray;
    let cell = cellList.first;
    while (cell != null) {
      rAve = 0;
      rVelAve = 0;
      rSep = 0;
      neighborPointer = cell.neighborPointerList.first;
      while (neighborPointer != null) {
        neighbor = neighborPointer.neighbor;
        rAve += neighbor.r;
        rVelAve += neighbor.rVel;
        dr = cell.r - neighbor.r;
        if (dr*dr < (minDistSquare / 3)) {
          rSep += dr;
        }
        neighborPointer = neighborPointer.next;
      }
      rAve *= (f = 1/cell.numNeighbors);
			rVelAve *= f;

      if (rSep != 0) {
        rSep *= (sepMagRecip = sepNormMag/Math.sqrt( rSep*rSep ));
      }

      cell.bufferRVel += ease*(rSep + rVelAve + rAve - cell.r - cell.bufferRVel);

      cell.bufferR += cell.bufferRVel;

			if (cell.bufferR < 0) {
				cell.bufferR = cell.bufferR + 359;
				cell.bufferRVel *= -1;
			} else if (cell.bufferR > 359) {
				cell.bufferR = cell.bufferR - 359;
				cell.bufferRVel *= -1;
			}
      cell = cell.next;
    }

    cell = cellList.first;
		while (cell != null) {
			cell.r = cell.bufferR;
			cell.rVel = cell.bufferRVel;
			cell = cell.next;
		}
    this.setState({
      cellList,
      cellArray
    });
    //console.log(this.state);
  }
  componentDidMount() {

    this.update();
    this.setIntervalID = setInterval(this.update.bind(this),1000/30);
    this.updateBackgroundColor();
    this.setIntervalBGID = setInterval(this.updateBackgroundColor.bind(this),5000);
  }
  componentWillUnmount() {

    // clean up after yourself ;)
    clearInterval(this.setIntervalID);
    clearInterval(this.setIntervalBGID);
  }
  // jsx renderer
  cell(cell, cellIndex, rowIndex) {
    return (
      <div
        className={styles.cell}
        key={rowIndex.toString() + '_' + cellIndex.toString()}
        style={
          {
            flexBase:2.6 + 'vw',
            height:2.6 + 'vw',

          }
        }
      >
        <div className={styles.line}
        style={{
          fontSize:'6px',
          transform:'rotate( '+Math.floor(cell.r)+'deg )'
        }}></div>
        {//Math.floor( cell.r)
          /*
            rowIndex.toString() + '_' + cellIndex.toString()
          */
          // cell.r
        }
      </div>
    )
  }
  row(row, rowIndex) {
    //console.log('testestesteste');
    return (
      <div
        className={styles.row}
        key={rowIndex}
        style={
          {
            height:2.6 + 'vw',
            flexBase:2.6 + 'vw'
          }
        }
      >
        {
          row.map((cell, cellIndex) => this.cell(cell, cellIndex, rowIndex))
        }
      </div>
    )
  }
  render() {
    return (
      <div className={styles.main + ' enterAnimation'} style={{backgroundColor:this.state.backgroundColor}}>
        {
          this.state.cellArray.map((row, rowIndex) => this.row(row,rowIndex)/*{
            <div className={styles.row} key={rowIndex}>
              {
                this.state.cellArray[rowIndex].map((cell, cellIndex) => {
                  <div className={styles.cell} key={rowIndex.toString() + ' ' + cellIndex.toString()}>
                    {cell.r}
                  </div>
                })
              }
            </div>
          }*/)
        }
      </div>
    )
  }
}

export default CellAutomataRotate
