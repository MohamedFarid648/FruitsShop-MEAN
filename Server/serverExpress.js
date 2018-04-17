//node serverExpress.js
var Myexpress=require("express");
var MyApp=Myexpress();

var MyPath=require("path");
var MyJSONobj=[];
var bodyParser=require("body-parser");
var MyFile=require("fs");
var cors = require('cors');//npm install cors --save
/*

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

instead of writing res.set({'Access-Control-Allow-Original':'*'})
 */

//1.Listen
MyApp.listen(7000,function(){
	
	console.log("Start Listening");
})

//2.Use Static Files
//MyApp.use(Myexpress.static("./public"));
MyApp.use(cors());

//Include Body Parser to translate Body in post data to express
MyApp.use(bodyParser.urlencoded({
	extended:true
}))

//3.Route URLs
     
     
	 //3.1 Home Page(Add Employee in index.html)
	MyApp.get("/",function(req,res){

		console.log("index.html");
		res.sendFile(MyPath.join(__dirname+"/index.html"));

	})

	//3.2.1 Products.json
	MyApp.get("/ListProducts",function(req,res){

		//console.log("/Products.json.");
		//res.sendFile(MyPath.join(__dirname+"/Products.json"));
		MyFile.readFile( __dirname + "/" + "Products.json", 'utf8', function (err, data) {

      // console.log( data );
       res.end( data );
   });
		
	})

	//3.2.2 Clients.json 
	MyApp.get("/ListClients",function(req,res){

		MyFile.readFile( __dirname + "/" + "Clients.json", 'utf8', function (err, data) {

      // console.log( data );
       res.end( data );
   });
		
	})


	//3.3 Post from index.html
	
	MyApp.post("/AddProduct",function(req,res){
		console.log("Body::"+req.body);//please install body parser first to translate body from req to express server
debugger;
		/*var userName=req.body.Name;
		var userSalary=req.body.Salary;
		console.log("Name:"+userName);
		console.log("Salary:"+userSalary);
	    MyJSONobj.push({"Name":userName,"Salary":userSalary});
	
		MyFile.writeFile("./Employees.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
			if(err)
				throw err;
		})
		

		res.redirect("/AllEmployees")*/
	})
	

	
	