const express = require('express');
const app = express();
let alunos = [
    {id: 1, nome: 'João', curso: 'Desenvolvimento de Sistemas'},
    {id: 2, nome: 'Maria', curso: 'Desenvolvimento de Sistemas'},
    {id: 3, nome: 'Rafa', curso:'Desenvolvimento de Sistemas'},
    {id: 4, nome: 'Pedro', curso: 'Adm'},
    {id: 5, nome: 'João', curso: 'Desenvolvimento de Sistemas'},
];
app.get('/', (req,res) => {
    res.json({
        message: 'API Alunos funcionando'
    })
})

const PORTA = 3000;
app.listen(PORTA,()=>{
console.log(`Servidor rodando na porta ${PORTA}`);
console.log(`acesse: http://localhost: ${PORTA}`);
})