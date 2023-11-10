const client = mqtt.connect('wss://signboard:yVmKCX6VjRKycUZ5@signboard.cloud.shiftr.io', {
  clientId: 'web_interface'
});

client.on('connect', function() {
  console.log('connected!');
  MQTTConnected = true;
});


function requestParameters(){
  console.log("Request");
  client.publish('/RequestParameters',"Request");
}

  var value_1;
  var old_value_1;

  var value_2;
  var old_value_2;

    var value_3;
  var old_value_3;

    var value_4;
  var old_value_4;

    var value_5;
  var old_value_5;

    var value_6;
  var old_value_6;



function sendParameters(){
    old_value_1 = value_1;
    value_1 = String($("#val-1").slider("value"))

    if(value_1 != old_value_1){
    client.publish('/value_1',value_1);  
   }



    old_value_2 = value_2;
    value_2 = String($("#val-2").slider("value"))

    if(value_2 != old_value_2){
    client.publish('/value_2',value_2);  
   }


       old_value_3 = value_3;
    value_3 = String($("#val-3").slider("value"))

    if(value_3 != old_value_3){
    client.publish('/value_3',value_3);  
   }




       old_value_4 = value_4;
    value_4 = String($("#val-4").slider("value"))

    if(value_4 != old_value_4){
    client.publish('/value_4',value_4);  
   }



       old_value_5 = value_5;
    value_5= String($("#val-5").slider("value"))

    if(value_5 != old_value_5){
    client.publish('/value_5',value_5);  
   }




       old_value_6 = value_6;
    value_6 = String($("#val-6").slider("value"))

    if(value_6 != old_value_6){
    client.publish('/value_6',value_6);  
   }




;}

