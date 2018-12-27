//const districtSrv = require('../services/districtService');
const District = require('../models/districtModel');
const districts = require('../test/area_hcm');
const wards = require('../test/hcm_districts_wards.ts');

exports.getDistrict = (object, callback) => { 
    
    function getDistrict(id)
    {
        let ward;
        switch(id) {
            case 'Q1':
            ward = ward1;
            break;
            case 'Q12':
            ward = ward12;
            break; 
            case 'QTD':
            ward = wardTD;
            break; 
            case 'Q9':
            ward = ward9;
            break;
            case 'QGV':
            ward = wardGV;
            break; 
            case 'QBTh':
            ward = wardBTh;
            break; 
            case 'QTB':
            ward = wardTB;
            break;
            case 'QTP':
            ward = wardTP;
            break; 
            case 'QPN':
            ward = wardPN;
            break; 
            case 'Q2':
            ward = ward2;
            break;
            case 'Q3':
            ward = ward3;
            break; 
            case 'Q10':
            ward = ward10;
            break; 
            case 'Q11':
            ward = ward11;
            break;
            case 'Q4':
            ward = ward4;
            break; 
            case 'Q5':
            ward = ward5;
            break; 
            case 'Q6':
            ward = ward6;
            break;
            case 'Q8':
            ward = ward8;
            break; 
            case 'QBT':
            ward = wardBT;
            break;
            case 'Q7':
            ward = ward7;
            break;
            case 'HCC':
            ward = wardCC;
            break; 
            case 'HHM':
            ward = wardHM;
            break;
            case 'HBC':
            ward = wardBC;
            break;
            case 'HNB':
            ward = wardNB;
            break; 
            case 'HCG':
            ward = wardCG;
            break; 
            default: break;
        }

        let res = ward.map(x => {return x.wardName.trim()});
        district.forEach(element => {
            if(element.id === id ) {
                let result = {id: element.id, districtName: element.districtName.trim(), wardname: res}
                console.log(result);       
                }
        });
    }
    // res.save((err, data) => {
    //     if (err)
    //         res.send(err);
    //     return callback(data);
    // });
}

// function joinObjects() {
//     let idMap = {};
  
//     for(let i = 0; i < arguments.length; i++) {       
//       for(let j = 0; j < arguments[i].length; j++) {
//         let currentID = arguments[i][j]['id'];
//         if(!idMap[currentID]) {
//             idMap[currentID] = {};
//         }
        
//         for(key in arguments[i][j]) {
//             idMap[currentID][key] = arguments[i][j][key];
//         }
//       }
//     }
//     var newArray = [];
//     for(property in idMap) {
//         newArray.push(idMap[property]);
//     }
//     return newArray;
// }

//   let jsonData = JSON.parse(wards);
//   for(let i = 0; i < jsonData.length; i++) {
//     let obj = jsonData[i];
//     console.log(obj.districtName);
//   }
  
//   let d = new District();
//   d.districtName = object.districtName;
//   d.save((err, data) => {
//       if (err)
//           res.send(err);
//       return callback(data);
//   });


