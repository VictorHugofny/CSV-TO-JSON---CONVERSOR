const fs = require('fs');
const csv = require('csv-parser');

const results = [];

const csvFilePath = 'teste.csv'

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', ()=>{
        const jsonOutput = JSON.stringify(results, null, 2);
        
        const outputFilePath = 'output.json';

        fs.writeFileSync(outputFilePath, jsonOutput);
        console.log("Concluido: ", outputFilePath)
    })
    .on('error', (err)=>{
        console.log("Error: ", err.message)
    })