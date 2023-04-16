import pkg from 'xlsx';
const { readFile, utils } = pkg;


export default function sheetToCsv (file, sheet, range) {
    // Load the workbook
    const workbook = readFile(file);
    
    // Select the worksheet
    const worksheet = workbook.Sheets[sheet];

    // Define the range of columns to read
    const columnRange = range;

    // Get the column data
    const columns = utils.sheet_to_csv(worksheet, {
        range: columnRange,
        header: 1,
        blankrows: false,
        raw: false,
    });

    return columns;
}

