const {testConnection}= require('./conction_test');
const {testMarker}=require('./maker_controller_test');
const {testItem}= require('./item_controller_test')
const { testSupplier}=require('./supplier_controller_test');
const argumentos = process.argv.slice(2,process.argv.length);

console.log(argumentos)
// validamos que tenga como minimo 2 parametros.
if (false)
{   
    console.log(testConnection()?"testConnection status: success":"testConnection status: error");
	console.log(testMarker()?"testMaker status: success":"testMaker status: error");
    console.log(testItem()?"testTtem status: success":"testItemaker status: error");

	process.exit();
}

switch (argumentos[0]){
    case 'conection':{
        //console.log(" Conecction testConnection status: success testConnection status: error");
        console.log(testConnection()?"testConnection status: success":"testConnection status: error");
        break
    }
    case 'maker':{
        //console.log(" Maker testConnection status: success testConnection status: error");
        console.log(testMarker()?"testMaker status: success":"testMaker status: error");    
        break
    }
    case 'item':{
        //console.log(" Items testConnection status: success testConnection status: error");
        console.log(testItem()?"testTtem status: success":"testItemaker status: error");
        break
    }
    case 'supplier':{
        console.log(testSupplier()?"testTtem status: success":"testItemaker status: error");
    }
}
