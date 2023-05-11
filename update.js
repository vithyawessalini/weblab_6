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
    var input1=qs.parse(query)["input1"];
    user=input1;
    var input2=qs.parse(query)["input2"];
    em=input2;
    response.write("Hello "+user+", your password has been changed");
    response.end();
    
    updatedata();
}
http.createServer(onRequest).listen(4456);
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
        const updatedata=async() => {

            const filter = { name: user  };
            const update = { password:em};
            
            let doc = await Name.findOneAndUpdate(filter, update);
            console.log("updated successfully");
            
            }
           
