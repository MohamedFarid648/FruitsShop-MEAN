//node serverExpress.js
var Myexpress=require("express");
var MyApp=Myexpress();
var MyPath=require("path");
var MyFile=require("fs");
var bodyParser=require("body-parser");
//please install body parser first to translate body from req to express server
var cors = require('cors');//npm install cors --save
/*

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

instead of writing res.set({'Access-Control-Allow-Original':'*'})
 */

var MyJSONobj=[];

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
MyApp.use(bodyParser.json());

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


	//3.3 Post (Add) Product
	
	MyApp.post("/AddProduct",function(req,res){
		//Don't forget bodyParser.json() ,if you forget then req.body.Id,req.body.Name,req.body.Name,... will be undefined
	
		/*for (var key in req) {
			console.log(key);
			
		}*/
	    //First:Get All data 
       let data= MyFile.readFileSync("./Products.json");
		MyJSONobj=JSON.parse(data);

	    MyJSONobj.push({"Name":req.body.Name,"Price":req.body.Price,"Id":req.body.Id,"Description":req.body.Description,"Quantity":req.body.Quantity,"imgUrl":req.body.imgUrl});
	
	for (let key of MyJSONobj) {
			console.log(key);
			
		}
		MyFile.writeFile("./Products.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
			if(err)
				throw err;
		    
			     
		})
		
        res.send(JSON.stringify(MyJSONobj));
		//res.redirect("/AllEmployees")

		res.end();
	})
	

	
	

	//3.3 Delete Product
	
	MyApp.delete("/DeleteProduct/:id",function(req,res){
    console.log("params"+req.params.id)


	    //First:Get All data 
       let data= MyFile.readFileSync("./Products.json");
		MyJSONobj=JSON.parse(data);

        for(let i=0;i<MyJSONobj.length;i++){
             if(MyJSONobj[i].Id==req.params.id)
                 MyJSONobj.splice(i,1);
				 //just one element ,don't write it and you will remove all elements after this index =D
		}
	    /*MyJSONobj.push({"Name":req.body.Name,"Price":req.body.Price,"Id":req.body.Id,"Description":req.body.Description,"Quantity":req.body.Quantity,"imgUrl":req.body.imgUrl});
*/
/*for (let key of MyJSONobj) {
			console.log(key);
			
}*/
		MyFile.writeFile("./Products.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
			if(err)
				throw err;
		    
			     
		})
		
        res.send(JSON.stringify(MyJSONobj));
		//res.redirect("/AllEmployees")

		res.end();
	})

	//3.3 Delete Product
	
	MyApp.put("/UpdateProduct/:id",function(req,res){
    console.log("params"+req.params.id)
    console.log("body.Name::"+req.body.Name)
	


	    //First:Get All data 
       let data= MyFile.readFileSync("./Products.json");
		MyJSONobj=JSON.parse(data);

        for(let i=0;i<MyJSONobj.length;i++){
             if(MyJSONobj[i].Id==req.params.id)
                 MyJSONobj[i]={"Name":req.body.Name,"Price":req.body.Price,"Id":req.body.Id,"Description":req.body.Description,"Quantity":req.body.Quantity,"imgUrl":req.body.imgUrl};
				 //just one element ,don't write it and you will remove all elements after this index =D
		}
	    /*MyJSONobj.push({"Name":req.body.Name,"Price":req.body.Price,"Id":req.body.Id,"Description":req.body.Description,"Quantity":req.body.Quantity,"imgUrl":req.body.imgUrl});
*/
/*for (let key of MyJSONobj) {
			console.log(key);
			
}*/
		MyFile.writeFile("./Products.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
			if(err)
				throw err;
		    
			     
		})
		
        res.send(JSON.stringify(MyJSONobj));
		//res.redirect("/AllEmployees")

		res.end();
	})