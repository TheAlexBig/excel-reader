import csv from 'csv-parser';
import pkg from 'readable-stream';
const { Readable } = pkg;

export default function csvToJson (csvString) {
    return new Promise((resolve, reject) => {
        // Convert the CSV string to a Readable stream
        const csvStream = new Readable();
        csvStream.push(csvString);
        csvStream.push(null);

        // Create an empty array to hold the CSV data
        const csvData = [];

        // Use the csv-parser module to parse the CSV data
        csvStream.pipe(csv())
        // Push each row of data to the csvData array
        .on('data', row => csvData.push(row))
        // When the stream ends, convert the csvData array to a JSON object
        .on('end', () => {
            console.log('File converted to json');
            resolve(csvData)
        })
        .on('error', ()=>{
            console.error('Failed to convert csv to json');
            reject(error);
        });
    });
}