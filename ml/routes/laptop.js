const express=require('express')
const pool=require('./pool.js')
const router=express.Router();
//商品列表
 router.get('/list',(req,res)=>{
	 let obj=req.query;
	 let end=Number(obj.size);
	 let start=(obj.pno-1)*obj.size
	 let sql='select*from ml_laptop limit ?,?'
     pool.query(sql,[start,end],(err,result)=>{
		 if(err) throw err;
		 res.send(result);
	 });
 });
 //根据首页商品的id查询
 router.get('/laptop',(req,res)=>{
	 let $index_id=parseInt(req.query.index_id);
	 let sql="select*from ml_laptop where index_id=?" 
	   pool.query(sql,[$index_id],(err,result)=>{
		   if(err) throw err;
		  var laptop= JSON.parse(JSON.stringify(result))
		  var [lid]=laptop
		  let sql='select*from ml_laptop_color where laptop_id=?;select*from ml_laptop_size where laptop_id=?;select*from ml_laptop_pic where lapatop_id=?;select*from laptop_spec where laptop_id=?;select*from ml_laptop_family where fid=?'
		  var arr=[] ;
		  var str=parseInt(lid.lid)
		  var str1=parseInt(lid.family_id)
	      for (var i=0;i<4;i++){
		     arr.push(str)
			}
			arr.push(str1)
			pool.query(sql,arr,(err,resd)=>{
				var resd= JSON.parse(JSON.stringify(resd))
				if(err) throw err;
				for(key of resd){
					laptop.push(key)
				}
				res.send(laptop)
			});

  })
 })
 //商品详情
  router.get('/detail',(req,res)=>{
	 let obj=req.query;
	 let sql='select*from ml_laptop_color where laptop_id=?;select*from ml_laptop_size where laptop_id=?;select*from ml_laptop_pic where lapatop_id=?;select*from laptop_spec where laptop_id=?'
	 var arr=[] ;
	 var str=parseInt(obj.lid)
	 for (var i=0;i<4;i++){
		 arr.push(str)
	 }
	 pool.query(sql,arr,(err,result)=>{
		 if(err) throw err;
		 res.send(result);
	 });
  });
  //商品尺码
  router.get('/size',(req,res)=>{
	let $color_id=parseInt(req.query.color_id);
	let sql="select*from ml_laptop_size where color_id=?"
	pool.query(sql,[$color_id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
  //删除商品
  router.delete('/delete',(req,res)=>{
	  let obj=req.query;
	//   console.log(obj)
	  let sql='delete from ml_laptop where lid=?'
	  pool.query(sql,[obj.lid],(err,result)=>{
		  if(err)throw err;
		  if(result.affectedRows==1){
			  res.send('1')
		  }else{
			  res.send('0')
		  }
	  })
  });
  //添加商品
  router.post('/insert',(req,res)=>{
	  let obj=req.body;
	  let sql='insert into ml_laptop set ?'
	  pool.query(sql,[obj],(req,res)=>{
		  if(err)throw err;
		  if(reultaffectedRows==1){
			  res.send('1')
		  }else{
			  res.send('0')
		  }
	  })
  });  
   router.get("/fmaily",(req,res)=>{
	   var fid=req.query.fid
	   var sql="select * from ml_laptop_family where fid=?"
	   pool.query(sql,[fid],(err,result)=>{
		   if(err)throw err
		   res.send(result)
	   })
   })
module.exports=router;