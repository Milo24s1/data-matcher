const express =  require('express');
var bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express();
const port = process.env.PORT || 9999;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    console.log('get req came');
    res.render('index');
});
app.get('/add', function(req, res){
    console.log('get req came for add');
    res.render('add');
});

app.post('/getToken',function (req,res) {
    console.log('getToken req came ');
   res.send({'token':uuid.v4()});
});

app.post('/save',(req,res)=>{
    res.send({'message':'save endpoint is not implemented yet'});
});
app.post('/compare',(req,res)=>{
    res.send({'message':'compare endpoint is not implemented yet'});
});

app.listen(port, function(){
    console.log('Server is running on port:', port);
});