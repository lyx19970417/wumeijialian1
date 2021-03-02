const express=require('express');
const pool=require('./pool.js');
const router=express.Router();
//注册
router.post('/v1/reg',(req,res)=>{
	let obj=req.body;
	// console.log(obj)
    let sql='insert into ml_user set ?'      	
   pool.query(sql,[obj],(err,result)=>{
       if(err) throw err;
	   // console.log(result);
		if(result.affectedRows===1){
			//获取当前用户的uid并返回
			let sql='select uid from ml_user where uname=?'
			pool.query(sql,[obj.uname],(err,result)=>{
				if(err) throw err
				res.send(result)
			}) 
		}else{
			res.send('0')
		} 
 })	
})
//登录
router.get('/v1/login',(req,res)=>{
	var $uname=req.query.uname;
	 var $upwd=req.query.upwd;
	pool.query('select*from ml_user where upwd=? and uname=? or email=? or phone=? ',[$upwd,$uname,$uname,$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('0');
		};
	});	
});
//修改用户资料
router.put('/v1/update',(req,res)=>{
	var obj=req.body
	 obj.uid=parseInt(obj.uid)
	var sql="select * from ml_user where uid=? and "+obj.name+'=?'
    pool.query(sql,[obj.uid,obj.newVale],(err,result)=>{
		 if(err) throw err
		 if(result.length>0){
			 
			 res.send('0')
		 }else{
			 //不存在修改
			 delete obj.newVale
			 delete obj.name
			pool.query('update ml_user set ? where uid=?',[obj,obj.uid],(err,result)=>{
				if(err) throw err;
			   if(result.affectedRows==1){
				   res.send('1')
			   }else{
				   res.send('-1')   
			   }
			  });
		 }
})	
});
 //5.检索用户 根据 id 值id
 router.get('/v1/search/id',(req,res)=>{
   //5.1获取查询字符串数据
   let $uid=req.query.uid;
   //5.3执行SQL语句，查询编号对应的数据，并响应数据到浏览器端
   pool.query('SELECT * FROM ml_user WHERE uid=?',[$uid],(err,result)=>{
     if(err) throw err;
	 if(result.length>0){
		 res.send(result);
	 }else{
		 res.send('0')
	 }
   });
 });
//检测用户名是否纯在
router.get('/v2/checkuname',(req,res)=>{
	let $uname=req.query.uname;
   let sql='select*from ml_user where uname=?'
   pool.query(sql,[$uname],(err,result)=>{
			if(err) throw err;
				 if(result.length>0){
				   res.send('1')
			   }else{
				   res.send('0')
			   }	 
   })
})
module.exports=router;