'use strict';

var dates = ['11','12','13', '14', '15', '16', '17'];
var secondDates = ['18', '19', '20','21', '22', '23', '24'];
var thirdDates = ['25', '26', '27', '28', '29', '30', '1'];
var fourthDates = ['2', '3', '4', '5', '6', '7', '8'];
var headers = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Table headers
var renderHeaders = function() {
  var table = document.getElementById('table');
  var getHeaders = document.getElementById('table_header'); //grabbed headers
  var headersArray = [];//made a blank array
  for (var i = 0; i < headers.length; i++) {
    headersArray.push('<th>' + headers[i] + '<th>');
  } //cycled through headers to put ths on them
  var headerRow = document.createElement('tr'); //made a new row
  getHeaders.innerHTML = headersArray.join(''); //made the row's content be headersArray
  table.appendChild(headerRow); //appended headersRow
};

var renderDays = function() {
  var getDays = document.getElementById('table_days');
  var daysArray = [];
  for (var j = 0; j < dates.length; j++) {
    daysArray.push('<td>' + dates[j] + '<td>');
  }
  getDays.innerHTML = daysArray.join('');
};

var renderDays2 = function() {
  var table = document.getElementById('table');
  var getSeconds = document.createElement('tr');
  var secondsArray = [];
  for (var k = 0; k < secondDates.length; k++) {
    secondsArray.push('<td>' + secondDates[k] + '<td>');
  }
  getSeconds.innerHTML = secondsArray.join('');
  table.appendChild(getSeconds);
};

var renderDays3 = function() {
  var table = document.getElementById('table');
  var getThirds = document.createElement('tr');
  var thirdsArray = [];
  for (var k = 0; k < thirdDates.length; k++) {
    thirdsArray.push('<td>' + thirdDates[k] + '<td>');
  }
  getThirds.innerHTML = thirdsArray.join('');
  table.appendChild(getThirds);
};

var renderDays4 = function() {
  var table = document.getElementById('table');
  var getFourths = document.createElement('tr');
  var fourthsArray = [];
  for (var k = 0; k < fourthDates.length; k++) {
    fourthsArray.push('<td>' + fourthDates[k] + '<td>');
  }
  getFourths.innerHTML = fourthsArray.join('');
  table.appendChild(getFourths);
};

renderHeaders();
renderDays();
renderDays2();
renderDays3();
renderDays4();

//Now for the adding of tasks//
var toDos;
var form = document.getElementById('toDos');

function addTask(event) {
  event.preventDefault();
  var task = document.getElementById('text');
  console.log('task = ' + task)
  toDos = toDos.push('<td>' + task + '<td>');
  var monthlyToDos = document.getElementById('monthToDos');
  monthlyToDos.appendChild(task);
  form.reset();
}

form.addEventListener('submit', addTask);
