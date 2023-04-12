// npm start -- --FILE=file.xlsx --SHEET=Sheet1 --COLUMNS=A:M
import {reader, converter, mapper} from './excel/index.js';

const file = process.argv.find(arg => arg.startsWith('--FILE=')).substring(7);
const sheet = process.argv.find(arg => arg.startsWith('--SHEET=')).substring(8);
const columns = process.argv.find(arg => arg.startsWith('--COLUMNS=')).substring(10);


try {
    const csvData = reader(file, sheet, columns);
    const jsonData = await converter(csvData);
    const mappedData = mapper(jsonData);
    console.log(mappedData);
} 
catch (error) {
    console.error(error);
}