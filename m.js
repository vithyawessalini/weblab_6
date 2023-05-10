http = require('http')
url = require('url')
qs = require('querystring')

let user="a";
let em="b";
let pass="c";
let ph="d";


function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var username=qs.parse(query)["fname"];
    user=username;
    var email=qs.parse(query)["email"];
    em=email;
    var password=qs.parse(query)["pass"];
    pass=password;
    var phno=qs.parse(query)["pn"];
    ph=phno;
    response.write("Hello "+username+", your email is "+email+"\n\nWelcome to this page...\n\nYour query regarding "+password+" is successfully registered.\n\nPlease CONFIRM whether the following is your submitted query: \n"+phno);
    response.end();
    
    insertdata();
}
http.createServer(onRequest).listen(8860);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/lab";
const name1 = new mongoose.Schema({ name: String, email: String, password:String, phno: String });
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
        const cat = new Name({ name: user, email: em, password:pass, phno: ph});        
        cat.save().then(() => console.log('Saved in db'));        
        }
        const updatedata=async() => {

            const filter = { email:"wessalini@123"  };
            const update = { password:"hello"};
            
            let doc = await Name.findOneAndUpdate(filter, update);
            
            console.log(doc.email); 
            console.log(doc.password); 
            console.log("updated successfully");
            
            }
           updatedata()
