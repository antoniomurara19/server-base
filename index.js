const express = require('express')
const app = express()

const hostname = 'localhost'
const PORT = 3000
/*----configurações do express----*/
app.use(express.urlencoded({extended:true}))
app.use(express.json())
/*----fim das config. do express----*/

/*-----arquivos estáticos-----*/
app.use(express.static('public'))
/*-----fim do arq. estatico-----*/

/*----rotas do projeto----*/
app.get('./src/', (req,res)=>{

})
app.get('/', (req,res)=>{
    res.render('index.html')
})




/*----fim das rotas de projeto---*/
app.listen(PORT,hostname,()=>{
    console.log(`O servidor está rodando ${hostname}:${PORT}`)
})