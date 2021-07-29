// To get messages from emails 
function getRelevantMessages()
{
  var threads = GmailApp.search("subject: Nophin",0,10);
  var messages=[];
  threads.forEach(function(thread)
                  { 
                    let countMessage = thread.getMessageCount();
                    let threadMessages = thread.getMessages();
                    for(let i=0;i<countMessage;i++){
                      messages.push(threadMessages[i]);
                          
                    }
                  });
                  
  Logger.log("Tuesday")                
  Logger.log(messages);
  return messages;
}

// To parse data from message
function parseMessageData(messages)
{
  var records=[];
  for(var m=0;m<messages.length;m++)
  {
    var subject = messages[m].getSubject();
    Logger.log("This is the subject " + subject);
    var text = messages[m].getPlainBody();
    var messageId = messages[m].getThread().getId();
    var fromAddress =  messages[m].getFrom();
    Logger.log("To get the email address  "+ fromAddress);
    Logger.log("Get message ID "+ messageId)
    var myQuantity = text.match(/Quantity:[(0-9)]+/g);
    var myProduct = text.match(/Product:[A-z0-9 ]+/g);
    var myDestination = text.match(/Destination:[A-z0-9 ]+/g);
    
    Logger.log("Info from emails " + myQuantity + myProduct + myDestination);
  

    if(!myQuantity ||!myProduct || !myDestination)
    {
      console.log("no matches") 
      //No matches; couldn't parse continue with the next message
      continue;
    }
    
    
    for(let i=0;i<myQuantity.length;i++){
      console.log("Checking for Quantity " + myQuantity.length) 
      var rec = {}    
      rec.Quantity = myQuantity[i].substring(9);
      rec.Product = myProduct[i].substring(8);
      rec.Destination = myDestination[i].substring(12);
      rec.OrderId = messageId + i;
      rec.CustomerEmail = fromAddress;
      //cleanup data 
      records.push(rec);
    }
  }
  
  Logger.log("These are the records ")
  Logger.log(records);
  return records;
}

// sets up display for the parsed data
function getParsedDataDisplay()
{
  var templ = HtmlService.createTemplateFromFile('parsed');
  templ.records = parseMessageData(getRelevantMessages());
  saveDataToSheet(templ.records);
  return templ.evaluate();
}

// calls getParsedDataDisplay and starts web app
function doGet()
{
  return getParsedDataDisplay();
}

// takes the recorded data and saves to sheet
function saveDataToSheet(records)
{
  //START - command to clear the data in the Spreadsheet
  ClearCells();
  //END - command to clear the data in the Spreadsheet 
 
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1WG-gZMZuRni403_fskzHYnqW8qm0AxqeUwfnRyOw3Cc/edit#gid=0');
  var sheet = spreadsheet.getSheetByName("Sheet1");
  for(var r=0;r<records.length;r++)
  {
    sheet.appendRow([records[r].OrderId,records[r].Quantity,records[r].Product, records[r].Destination,records[r].CustomerEmail ]);
  }
  
}

// Clears SpreadSheet cells
function ClearCells() {
  var sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1WG-gZMZuRni403_fskzHYnqW8qm0AxqeUwfnRyOw3Cc/edit#gid=0');
  sheet.getRange('A2:E9').clearContent();
}
  

// Processes the emails and looks for transactions
function processTransactionEmails()
{
  var messages = getRelevantMessages();
  var records = parseMessageData(messages);
  saveDataToSheet(records);
}

// write multiple rows to the spreadsheet
function writeMultipleRows() {
 var data = getOrdersData();
 var lastRow = SpreadsheetApp.getActiveSheet().getLastRow();
 SpreadsheetApp.getActiveSheet().getRange(lastRow + 1,1,data.length, data[0].length).setValues(data);
}

// if random rows are needed
function getMultipleRandomRows() {
 let OrderId = 1800;
 let Quantity = 70;
 let Product = "Aspirin";
 let Destination = "67 New York Ave";

 var data = [];
 for(var i =0; i < 1000; i++) {
   data.push([rec.OrderId, rec.Quantity, Product, Destination]);
 }
 console.log(data.length);
 return data;
}
