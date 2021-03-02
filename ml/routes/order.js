const express=require('express')
const pool=require('./pool.js')
var qs=require("qs")
const router=express.Router();
//支付完成的订单
router.post("/v1/inster",(req,res)=>{
  var order=req.body.orde
 for(var key of order){
    var sql="insert into  ml_order set ?"
    pool.query(sql,[key],(err,result)=>{
          if(err)throw err
    })
 }
 res.send("1")
})
//获取用户的地址
router.get("/v1/address",(req,res)=>{
   var uid=req.query.uid
   var sql="select*from ml_receiver_address where user_id=?"
   pool.query(sql,[uid],(err,result)=>{
         if(err) throw err
         res.send(result)
   })
})
//添加用户地址
router.post("/v1/add_address",(req,res)=>{
  var obj=req.body
  //判断该地址是否存在
  var sql="select*from ml_receiver_address where user_id=? and name=? and prov=? and city=? and county=? and adres=? and is_default=?"
  pool.query(sql,[obj.user_id,obj.name,obj.prov,obj.city,obj.county,obj.adres,obj.is_default],(err,result)=>{
      if(err)throw err
      if(result.length>0){
        res.send("0")
      }else{
         var sql="insert into  ml_receiver_address set ?"
          pool.query(sql,[obj],(err,result)=>{
          if(err)throw err
          if(result.affectedRows>0){
           res.send('1')
           }else{
             res.send('-1')
          } 
        })
      }
  })
})
//修改默认地址
router.put("/v1/is_def",(req,res)=>{
  //去除当前选中的默认地址
  var sql="update  ml_receiver_address set is_default=? where is_default=?"
  pool.query(sql,[false,true],(err,result)=>{
     if(err) throw err
     if(result.affectedRows>0){
      res.send('1')
      }else{
        res.send('-1')
     } 
  })
})
//update 地址
router.put("/v1/upd_adress",(req,res)=>{
  var obj=req.body
  var aid=obj.aid
  delete obj.aid 
  var sql="update ml_receiver_address set ? where aid=?" 
  pool.query(sql,[obj,aid],(err,result)=>{
     if(err)throw err
     if(result.affectedRows>0){
      res.send('1')
      }else{
        res.send('-1')
     } 
  })
})
//获取订单信息
router.get("/v1/center_order",(req,res)=>{
  var uid=req.query.uid
  var sql="select*from  ml_order where user_id=?"
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err
    res.send(result)
  })
})
//根据订单状态获取数据
router.get("/v1/state_order",(req,res)=>{
  var state=req.query.state
  var uid=req.query.uid  
  var sql="select*from  ml_order where user_id=? and status=?"
  pool.query(sql,[uid,state],(err,result)=>{
    if(err) throw err
    res.send(result)
  })
})
module.exports=router;
