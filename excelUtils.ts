import * as XLSX from 'xlsx';

export function readTestData(filePath: string, sheetName: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
}
