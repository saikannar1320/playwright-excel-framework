import * as XLSX from 'xlsx';

export interface TestData {
  [key: string]: string;
}

export function getTestData(filePath: string, sheetName: string, testCaseID: string): TestData | null {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json<any>(sheet);

  for (const row of data) {
    if (row['TestCaseID'] === testCaseID) {
      return row;
    }
  }
  return null;
}

export function getTestCaseIDsToRun(filePath: string, initiatorSheet: string): string[] {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[initiatorSheet];
  const data = XLSX.utils.sheet_to_json<any>(sheet);

  return data.filter((row: any) => row['Execute'] === 'Yes').map((row: any) => row['TestCaseID']);
}
