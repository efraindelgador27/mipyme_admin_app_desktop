const {testConnection}= require('./conction_test');

result_test= testConnection()?"testConnection status: success":"testConnection status: error";
console.log(result_test);