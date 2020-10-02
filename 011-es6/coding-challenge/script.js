//*********************************************************
//            town element
//*********************************************************
class TownElement{

  constructor(name,buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }

  getAge(){
    const now = new Date().getFullYear();
    return now - this.buildYear;
  }
}
//**********************************************************
//              park extends town TownElement
//**********************************************************
class Park extends TownElement{

    constructor(name, buildYear,trees,area){

      super(name,buildYear);
      this.trees = trees;
      this.area = area;
    }

    getTreeDensity(){

    return this.trees/this.area;
  }

}
//***********************************************************
//          street extends TownElement
//***********************************************************
class Street extends TownElement{
  //default size parameter of normal
  constructor(name,buildYear,length,size = 3){

    super(name,buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet(){

    const classification = new Map();
      classification.set(1,'tiny');
      classification.set(2,'small');
      classification.set(3,'normal');
      classification.set(4,'big');
      classification.set(5,'huge');

      return classification;
  }
}

//****************************************************************

function calcAvgAge(parkArr){

  let total = 0;
  parkArr.forEach(el => total += el.getAge());
//  console.log (total + ' is total ages');
  return (total/parkArr.length).toFixed(2);
}
//*****************************************************************

function parksReport(parkArr){

    console.log('----------------PARKS REPORT--------------');
    //average age of each park
    console.log(`the average age of the ${parkArr.length} parks is ${calcAvgAge(parkArr)}`);

    //get tree density for each park and log to console
    parkArr.forEach(el => console.log(`${el.name} park has a tree density of ${el.getTreeDensity()}`));

    //name of the park that has more than 1000 trees
    parkArr.forEach(el => {
      if (el.trees > 1000) {
        console.log(`${el.name} park has more than 1000 trees!!!`);
      }
    });
}
//********************************************************************
function streetsReport(streetArr){

  console.log('---------------STREETS REPORT-------------');

  //total and avg length of town's streets
  const totalLength = streetArr.reduce((accumulator,cur) =>
  accumulator + cur.length,0);

  //console.log(totalLength);
  // let totalLength = 0;
  // streetArr.forEach(el => totalLength += el.length);

  let avgLenth = 0;
  avgLength = (totalLength/streetArr.length).toFixed(2);

  console.log(`our ${streetArr.length} streets have a total length of ${totalLength} miles,
  with an average length of ${avgLength} miles`);

  //size classification for each street
  streetArr.forEach(el => console.log(`${el.name} street, built in ${el.buildYear}, is a ${el.classifyStreet().get(el.size)} street`));
}
//***********************************************************
//               main
//***********************************************************

let park1 = new Park('david',1972,34,1000);
let park2 = new Park('bryan',1990,500,2000);
let park3 = new Park('tanglewood',1950,10000,100000);

let parkArr = [];
parkArr.push(park1);
parkArr.push(park2);
parkArr.push(park3);

let st1 = new Street('richard',1996,30);
let st2 = new Street('hudson',1950,270,4);
let st3 = new Street('harrison',1990,220,1);
let st4 = new Street('floral',1890,200);

let streetArr = [];
streetArr.push(st1);
streetArr.push(st2);
streetArr.push(st3);
streetArr.push(st4);

parksReport(parkArr);
streetsReport(streetArr);
