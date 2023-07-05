const {testConnection,testMarker}= require('./conction_test');

result_test= testMarker()?"testConnection status: success":"testConnection status: error";
console.log(result_test);