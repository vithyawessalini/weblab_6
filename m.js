http = require('http')
url = require('url')
qs = require('querystring')

let user="a";
let em="b";
let sub="c";
let ms="d";

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var username=qs.parse(query)["fname"];
    user=username;
    var email=qs.parse(query)["email"];
    em=email;
    var subject=qs.parse(query)["lname"];
    sub=subject;
    var msg=qs.parse(query)["pn"];
    ms=msg;
    response.write("Hello "+username+", your email is "+email+"\n\nWelcome to this page...\n\nYour last name is"+subject+"You have been successfully registered.\n\nPlease CONFIRM whether the following is your Phone number: \n"+msg);
    response.end();
    
    insertdata();
}
http.createServer(onRequest).listen(8869);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({ name: String, email: String, lname: String, ph: String });
const Name= mongoose.model('Name',name1)

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
    


    const insertdata=async()=>{
        const cat = new Name({ name: user, email: em, lname: sub, ph: ms});        
        cat.save().then(() => console.log('Saved in db'));        
        }
