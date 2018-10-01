
var fr = require('fs');



//CODE FOR CRUD



var exp = require('express');
var parser = require('body-parser');
var cors = require ('cors');



var MongoClient = require('mongodb').MongoClient

var app = exp();
app.use(parser.json());
app.get('/rest/api/read', (req,res)=>{
//     // res.header("Access-Control-Allow-Origin", "*"),
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept"),
//     // res.json({"name":"alpha"})
 
//  var arr =  upm.showModule();

    res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept"); 
//     //var x = JSON.parse(fr.readFileSync('hello.json')); 
//     console.log(arr);
//     res.send(arr);


console.log("Heeeeereeeeeeeeeeeeeeee");

    
MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser:true},
function(err, dbvar){
    if(err) throw err;
  var arr;
    var coll = dbvar.db('miniproject');
 coll.collection('datacollec').find({}).toArray(function(err,res1){
        if(err) throw err;
        else{
        console.log("1 document return");
        console.log(res1);
        //arr = res1;
        res.send(res1);
      }
        dbvar.close();
    })          
    //dbvar.close();
})




    
});







app.post('/rest/api/write', (req,res)=>{

    
        res.header("Access-Control-Allow-Origin","*");
         res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept"); 

    
    
    console.log("Heeeeereeeeeeeeeeeeeeee");
    
        console.log(req.body);
      var  data = req.body;
    //  data = [
    //     {
    //         id:1,
    //         name:"Scissors",
    //         description:"use for cutting stuff",
    //         price:4.99
        
    //     },
    
    //    {
    //         id:2,
    //         name:"Glue",
    //         description:"use for sticking stuff",
    //         price:2.99
        
    //     },
        
    //    {
    //         id:3,
    //         name:"Soap",
    //         description:"For cleaning stuff",
    //         price:1.99
        
    //     },
    
    //     {
    //         id:4,
    //         name:"Detergent",
    //         description:"For cleaning clothes",
    //         price:3.99
        
    //     },
        
    //     {
    //         id:5,
    //         name:"Shampoo",
    //         description:"For cleaning hair",
    //         price:5.99
        
    //     },
    
            
    //     {
    //         id:6,
    //         name:"pan",
    //         description:"For cooking stuff",
    //         price:10.99
        
    //     },
            
    //     {
    //         id:7,
    //         name:"detergent",
    //         description:"For cleaning clothes",
    //         price:3.99
        
    //     },
            
    //     {
    //         id:8,
    //         name:"Pen",
    //         description:"For writing stuff",
    //         price:3.99
        
    //     },
            
    //     {
    //         id:9,
    //         name:"Pencil",
    //         description:"For writing stuff",
    //         price:3.99
        
    //     },
    
    //     {
    //         id:10,
    //         name:"Sharpner",
    //         description:"For sharpening pencil",
    //         price:3.99
        
    //     },
    
        
    //     {
    //         id:11,
    //         name:"Eraser",
    //         description:"For rubbing or erasing stuff",
    //         price:3.99
        
    //     }
    
        
    
    // ]














    MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser:true},
    function(err, dbvar){
        x = {
            id:1,
            name:"Scissors1",
            description:"use for cutting stuffs",
            price:4.99
        }
        if(err) throw err;
    
        var coll = dbvar.db('miniproject');
        coll.collection('datacollec').insert(data, true, function(err,res1){
            if(err) throw err;
            console.log("1 document inserted");
            res.send(data);
            dbvar.close();

        })          
        dbvar.close();          
        //dbvar.close();
    })
    
    
    
    
        
    });
    

































app.post("/rest/api/delete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);
//res.send(req.body);
data = req.body;
console.log("yoooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
//console.log(x);
MongoClient.connect('mongodb://localhost:27017/',
function(err, dbvar){
    var x = {name:data.name};

    if(err) throw err;

    var coll = dbvar.db('miniproject');
    coll.collection('datacollec').remove(x, true, function(err,res){
        if(err) throw err;
        console.log("1 document deleted");
        dbvar.close();
    })         
    



  //  dbvar.close();
})


});




app.post('/rest/api/update', (req,res)=>{

    
    res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept"); 

     x = req.body;

     console.log(x);

console.log("udateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

    

MongoClient.connect('mongodb://localhost:27017/',
function(err, dbvar){
    if(err) throw err;
    var y = {name:x.oname};
    console.log('yo'+x.oname);
    
    var coll = dbvar.db('miniproject');
  //  var j = x.key;
 //   console.log(x);
    coll.collection('datacollec').update(y,{$set:{"id":x.id,"name":x.name,"price":x.price,"description":x.description}}, true, function(err,res1){
        if(err) throw err;
        console.log("1 document updated");
        res.send(y);
        dbvar.close();
    })          
    dbvar.close();
})


    
});

















app.use(cors()).listen(1234, ()=>{
    console.log('Express Started')
})



app.get('/rest/api/input', (req,res)=>{

    
    res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept"); 



console.log("Heeeeereeeeeeeeeeeeeeee");

    console.log(req.body);
 // var  data = req.body;
 data = [
    {
        id:1,
        name:"Scissors",
        description:"use for cutting stuff",
        price:4.99
    
    },

   {
        id:2,
        name:"Glue",
        description:"use for sticking stuff",
        price:2.99
    
    },
    
   {
        id:3,
        name:"Soap",
        description:"For cleaning stuff",
        price:1.99
    
    },

    {
        id:4,
        name:"Detergent",
        description:"For cleaning clothes",
        price:3.99
    
    },
    
    {
        id:5,
        name:"Shampoo",
        description:"For cleaning hair",
        price:5.99
    
    },

        
    {
        id:6,
        name:"pan",
        description:"For cooking stuff",
        price:10.99
    
    },
        
    {
        id:7,
        name:"detergent",
        description:"For cleaning clothes",
        price:3.99
    
    },
        
    {
        id:8,
        name:"Pen",
        description:"For writing stuff",
        price:3.99
    
    },
        
    {
        id:9,
        name:"Pencil",
        description:"For writing stuff",
        price:3.99
    
    },

    {
        id:10,
        name:"Sharpner",
        description:"For sharpening pencil",
        price:3.99
    
    },

    
    {
        id:11,
        name:"Eraser",
        description:"For rubbing or erasing stuff",
        price:3.99
    
    }

    

]














MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser:true},
function(err, dbvar){
    x = {
        id:1,
        name:"Scissors1",
        description:"use for cutting stuffs",
        price:4.99
    }
    if(err) throw err;

    var coll = dbvar.db('miniproject');
    coll.collection('datacollec').insert(data, true, function(err,res){
        if(err) throw err;
        console.log("1 document inserted");
        dbvar.close();
    })          
    dbvar.close();          
    //dbvar.close();
})




    
});


app.post("/rest/api/deleteall", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
  console.log(req.body);
  //res.send(req.body);
  data = req.body;
  console.log("yoooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
  //console.log(x);
  MongoClient.connect('mongodb://localhost:27017/',
  function(err, dbvar){
  //    var x = {name:data.name};
  
      if(err) throw err;
  
      var coll = dbvar.db('miniproject');
      coll.collection('datacollec').remove({}, true, function(err,res){
          if(err) throw err;
          console.log("1 document deleted");
          dbvar.close();
      })         
      
  
  
  
    //  dbvar.close();
  })
  
  
  });