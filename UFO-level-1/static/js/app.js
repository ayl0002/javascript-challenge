//from data.js
var tableData = data;

// YOUR CODE HERE!
var tableBody = d3.select("tbody");

tableData.forEach(function(delusionalHippies) {
  // console.log(delusionalHippies);
  var row = tableBody.append("tr");

  Object.entries(delusionalHippies).forEach(function([key, value]) {
    // console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
tableBody.html("");

  var inputElement = d3.select("#date_time");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredDate = tableData.filter(dateEntry => dateEntry.datetime === inputValue);

// console.log(filteredDate)  
// if (inputValue in tableData.datetime()){inputValue = inputValue}
// else {inputValue = "none"};

// if(inputValue !="none"){

var filterDate = inputElement.value;
  
filteredDate.forEach(function(delusionalHippiesFiltered) {
  console.log(delusionalHippiesFiltered);
  var row = tableBody.append("tr");

  Object.entries(delusionalHippiesFiltered).forEach(function([key, value]) {
    // console.log(key, value);

    var cell = row.append("td");
    cell.text(value);})});}

  // else {tableData.forEach(function(delusionalHippies) {console.log(inputValue);
  // // console.log(delusionalHippies);
  // var row = tableBody.append("tr");

  // Object.entries(delusionalHippies).forEach(function([key, value]) {
  //   // console.log(key, value);

  //   var cell = row.append("td");
  //   cell.text(value);
//   });  
// })}; 



    );
//   });
// });



  