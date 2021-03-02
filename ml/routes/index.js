const express=require('express')
const pool=require('./pool.js')
const router=express.Router();
//首页商品页
router.get('/v1/list',(req,res)=>{
    let obj=req.query;
    let sql="select*from ml_index_product";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
 });
 router.get("/v1/family",(req,res)=>{
     var sql="select *from ml_laptop_family"
     pool.query(sql,(err,result)=>{
         if(err) throw err
         res.send(result)
     })
 })
module.exports=router;
