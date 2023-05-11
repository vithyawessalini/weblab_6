http = require('http')
url = require('url')
qs = require('querystring')

let user="a";
let em="b";


function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var fname=qs.parse(query)["input1"];
    user=fname;
    var pass=qs.parse(query)["input2"];
    em=pass;
    
    let errors = [];
    Name.findOne({name:user,password:em}).then(user1=>{
        if(user1){
            //errors=({msg: 'logged in successfully'});
            response.write("Hello "+user+", you has been successfully logged in ");
            response.end();
        }
        else{
            //errors=({msg: 'user and password does not match'});
            response.write("Hello "+user+", user and password does not match ");
            response.end();
        }
        //console.log('register',{errors})
        
    })

    
}
http.createServer(onRequest).listen(4022);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({ name: String, password: String,});
const Name= mongoose.model('form',name1)

const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()
    


   