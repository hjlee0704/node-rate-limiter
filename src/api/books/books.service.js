import fs from 'fs';
import path from 'path';

const pathToJsonFile = 'src/api/books/books.json';
export const fetchSampleData = () => {
  const rawdata = fs.readFileSync(pathToJsonFile);
  const books = JSON.parse(rawdata);
  return books;
};
