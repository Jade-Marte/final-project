function removeDuplicates() {
  var sheet   = SpreadsheetApp.getActiveSheet();
  var data    = sheet.getDataRange().getValues();
  var newData = [];
  
  Logger.log(data);
  
  for (var i in data){
    var row       = data[i];
    var duplicate = false;
    for (var j in newData){
      if (row.join() == newData[j].join()){
        Logger.log(sheet);
        duplicate = true;
      }
    }
    if (!duplicate){
      Logger.log(sheet);
      newData.push(row);
    
    }
  }
  Logger.log(sheet);
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  
}
