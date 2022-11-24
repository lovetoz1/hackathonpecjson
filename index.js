const { json } = require("express");
const fs = require("fs");
const papa = require('papaparse');

var a={
    "id": "122-34-6543",
    "region": "NA",
    "firstName": "Leanne",
    "lastName": "Graham",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    "occupation": "self-employed",
    "age": 29,
    "loanHistory": [
        {
            "princicpal": 40000,
            "periodInYears": "3",
            "rateOfInterest": 10,
            "collateral": [
                {
                    "assetName": "property",
                    "estimatedValues": 70000
                }
            ]
        },
        {
            "princicpal": 140000,
            "periodInYears": "4",
            "rateOfInterest": 12,
            "isCommercial": true,
            "collateral": [
                {
                    "assetName": "condo",
                    "estimatedValues": 30000
                },
                {
                    "assetName": "vehicle",
                    "estimatedValues": 3000
                }
            ]
        },
        {
            "princicpal": 60000,
            "periodInYears": "4",
            "rateOfInterest": 12,
            "collateral": [
                {
                    "assetName": "jewellery",
                    "estimatedValues": 30000
                }
            ]
        }
    ]
};
 map1 = new Map();
function getjeyvalue(key,value,i) {
    if(typeof(value)=="object") return;

 map1.set(i+key,value);

// console.log(map1)

}

function traversal(arr,getjeyvalue,count) {

    for (var i in arr) {
        newcount =count+'.';
        getjeyvalue.apply(this,[i,arr[i],newcount]);  

        if (arr[i] && typeof(arr[i])=="object") {
            newcount+=i;
            traversal(arr[i],getjeyvalue,newcount);
      
        }
    }
}

traversal(a,getjeyvalue,'');


var data1;
var filea = fs.createReadStream('./example.csv');
papa.parse(filea, {
	complete: function(results) {
		console.log("Finished:", results.data);
        
	}
});

console.log(data1);

