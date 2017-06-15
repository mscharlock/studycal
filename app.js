'use strict';

var daysInMonth = 30;
var counter = 1;
var htmlContent = '';
var dateToday = new Date();
var month = dateNow.getMonth();
var day = dateNow.getDate();
var year = dateNow.getFullYear();
var headers = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//Table headers
var renderTable = function() {
  var table = document.getElementById('table');
  var getHeaders = document.getElementById('table_header'); //grabbed headers
  var headersArray = [];//made a blank array
  for (var i = 0; i < headers.length; i++) {
    headersArray.push('<th>' + headers[i] + '<th>');
  } //cycled through headers to put ths on them
  var headerRow = document.createElement('tr'); //made a new row
  headerRow.innerHTML = headersArray.join(''); //made the row's content be headersArray
  table.appendChild(headerRow); //appended headersRow
};
