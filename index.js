// const { json } = require("express");
const fs = require("fs");
const Path = require("path");
const papa = require("papaparse");
const { json } = require("body-parser");

var a = {
  id: "122-34-6543",
  region: "NA",
  firstName: "Leanne",
  lastName: "Graham",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  occupation: "self-employed",
  age: 29,
  loanHistory: [
    {
      princicpal: 40000,
      periodInYears: "3",
      rateOfInterest: 10,
      collateral: [
        {
          assetName: "property",
          estimatedValues: 70000,
        },
      ],
    },
    {
      princicpal: 140000,
      periodInYears: "4",
      rateOfInterest: 12,
      isCommercial: true,
      collateral: [
        {
          assetName: "condo",
          estimatedValues: 30000,
        },
        {
          assetName: "vehicle",
          estimatedValues: 3000,
        },
      ],
    },
    {
      princicpal: 60000,
      periodInYears: "4",
      rateOfInterest: 12,
      collateral: [
        {
          assetName: "jewellery",
          estimatedValues: 30000,
        },
      ],
    },
  ],
};
map1 = new Map();
function getjeyvalue(key, value, i) {
  if (typeof value == "object") return;

  map1.set(i + key, value);
}

function traversal(arr, getjeyvalue, count) {
  for (var i in arr) {
    newcount = count + ".";
    getjeyvalue.apply(this, [i, arr[i], newcount]);

    if (arr[i] && typeof arr[i] == "object") {
      newcount += i;
      traversal(arr[i], getjeyvalue, newcount);
    }
  }
}

traversal(a, getjeyvalue, "");
// console.log(map1);

var data;
const matchingCSVDir = "./data/sample_1/mapping.csv";
var filea = fs.createReadStream(matchingCSVDir);
const dirName = Path.dirname(matchingCSVDir).split("/")[2];
const fileName = Path.parse(matchingCSVDir).name;
const jsonFileName = dirName + "_" + fileName + ".json";
console.log(jsonFileName);
let finalMapCSVToJSON = {};
papa.parse(filea, {
  complete: function (results) {
    data = results.data;
    // console.log("Finished:", data);

    data.forEach((val, _) => {
      let n = val[2].length;

      let s = "";
      for (let i = 0; i < n; i++) {
        if (val[2][i] != " ") {
          s += val[2][i];
        }
      }

      n = s.length;
      let temp = "";
      for (let i = 0; i < n; i++) {
        if (s[i] != "+") {
          temp += s[i];
        } else {
          //   console.log(temp);
          if (temp != "Source") {
            // console.log(map1.get(temp));
            finalMapCSVToJSON[1] = "";
            finalMapCSVToJSON[val[1]] += map1.get(temp) + " ";
          }
          temp = "";
        }
      }
      if (temp != "Source") {
        // console.log(map1.get(temp));
        finalMapCSVToJSON[val[1]] = "";
        finalMapCSVToJSON[val[1]] += map1.get(temp);
      }
    });

    // console.log(typeof JSON.stringify(finalMapCSVToJSON));

    fs.writeFile(
      "jsonMapping/" + jsonFileName,
      JSON.stringify(finalMapCSVToJSON),
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }

        console.log("File Saved");
      },
    );
    // console.log(finalMapCSVToJSON);
  },
});

// Sample 1 Mapping CSV
// 6, CustomerProfession, ENUM(.occupation), {"self-employed": "SELF""," "salaried": "FIXED INCOME""," "other": "MISC"}

//Sample 2 Mapping CSV
