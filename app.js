const express = require ("express")
const app = express()

//precisa do npm install express --save

app.listen(8081, function(){
    console.log("Servidor Ativo")
})

app.get("/", function(req, res){
    console.log("Página Principal")
    res.send('Página Principal')
})

app.get("/contato", function(req, res){
    console.log("Página contato")
    res.send("Página contato")
})

app.get("/produtos/:item", function(req, res){
    res.send("Página de Produtos: " + req.params.item)
})

app.get("/carros/:modelo/:ano/:cor", function(req,res){
    res.send("Página de Carros: " + req.params.modelo + " Ano: " + req.params.ano + " Cor: " + req.params.cor)
})
