const express=require("express")
const pool=require("./pool.js")
const router=express.Router();
//添加购物车的商品
router.post('/v1/sert',(req,res)=>{
	//获取 修改的信息
	let obj=req.body;
	//检测信息是否存在
	let sql="select*from ml_shopping_cart where user_id=? and  title=? and color=? and size=?"
	pool.query(sql,[obj.user_id,obj.title,obj.color,obj.size],(err,result)=>{
		if(err) throw err;
		//如果 不存在 则添加 数据
		if(result.length==0){
			let sql='insert into ml_shopping_cart set ?'      	
			pool.query(sql,[obj],(err,result)=>{
				if(err) throw err;
				// console.log(result);
				 if(result.affectedRows===1){
					 res.send('1')
				 }else{
					 res.send('0')
				 }
			})		  
		}else{
			//如果存在 则 修改数量
			//获取数据表中的数量值
			let sql="select count from ml_shopping_cart  where user_id=? and  title=? and color=? and size=?" 
			pool.query(sql,[obj.user_id,obj.title,obj.color,obj.size],(err,result)=>{
				if(err) throw err;
				//数据表中的数据直
				var count= JSON.parse(JSON.stringify(result))
				//修改 数量的语句
				for(key of count){
					count=parseInt(key.count)
				}
				 count=parseInt(obj.count)+count 
			    let sql="update ml_shopping_cart set count=? where user_id=? and  title=? and color=? and size=?" 
			    pool.query(sql,[count,obj.user_id,obj.title,obj.color,obj.size],(err,result)=>{
				   if(err) throw err;
				   //修改成功返回1
			       if(result.affectedRows===1){
				      res.send('2')
			        }else{
						//修改失败返回-1
				      res.send('0')
			        }
		     	})  
			})
		}
 })	
})
//根据用户名的id查询已有的商品
router.get("/v1/user_id",(req,res)=>{
	let user_id=parseInt(req.query.user_id)
	// console.log(user_id)
	let sql="select*from ml_shopping_cart where user_id=?"   
	pool.query(sql,[user_id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
//删除购物车商品
router.delete('/v1/delete',(req,res)=>{
	let cid=parseInt(req.query.cid);
	// console.log(cid)
	let sql='delete from ml_shopping_cart where cid=?'
	pool.query(sql,[cid],(err,result)=>{
		if(err) throw err;
	     if(result.affectedRows>0){
			 res.send("1")
		 }else{
			 res.send("0")
		 }
	})
})
//根据商品id搜索商品
router.get("/v1/search",(req,res)=>{
	var product_id=parseInt(req.query.product_id)
	var sql="select*from ml_shopping_cart where product_id=?" 
	pool.query(sql,[product_id],(err,result)=>{
	  if(err)throw err;
	   if(result.length>0){
		   res.send("1")
	   }else{
		   res.send("0")
	   }            
	})	
})
//修改购物车的数量
router.put('/v1/update',(req,res)=>{
	var count=parseInt (req.body.count);
	var cid=parseInt(req.body.cid);
	// console.log(count)
	// console.log(user_id)
	// console.log(obj)
  pool.query('update ml_shopping_cart set count=? where cid=?',[count,cid],(err,result)=>{
	  if(err) throw err;
	//   console.log(result)
	 if(result.affectedRows==1){
		 res.send('1')
	 }else{
		 res.send('0')   
	 }
  });	
});
module.exports=router;
