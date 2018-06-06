var router = require('./router');

var app = router(3412);

var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
    {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
    {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2},
];

var contatos = [
    {nome: "Pedro", telefone: "99999-9988", dia: new Date(), operadora: {nome: "Tim", codigo: 12, categoria: "Celular"}},
    {nome: "Ana", telefone: "99999-8877", dia: new Date(), operadora: {nome: "GVT", codigo: 24, categoria: "Fixo"}},
    {nome: "Maria", telefone: "99999-7766", dia: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}}
];

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/operadoras', function (req, res){
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res){
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    var contato = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
});

app.options('/contatos', function (req, res) {
    res.end();
});