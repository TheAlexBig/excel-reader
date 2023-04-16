import {reader, converter, mapper, dbInsert} from './excel/index.js';
import connectionDetails from './env-reader/index.js';
import {connection} from './connector/index.js';

const file = connectionDetails.file;
const sheet = connectionDetails.sheet;
const range = connectionDetails.columns;
const table = connectionDetails.table;

const pool = connection;

try{
    const csvData = reader(file, sheet, range);
    const jsonData = await converter(csvData);
    const mappedData = mapper(jsonData);
    await dbInsert(mappedData, table, pool); 
}
catch (error) {
    console.error(error);
}

console.log('Proccess completed');
process.exit(1);