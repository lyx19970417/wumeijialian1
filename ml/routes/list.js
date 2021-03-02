const express=require('express');
const { PassThrough } = require('stream');
const pool=require('./pool.js')
const router=express.Router();
router.get("/v1/family",(req,res)=>{
    var family_id=req.query.family_id
      sql="select*from ml_index_product where family_id=?";
      pool.query(sql,[family_id],(err,result)=>{
        if(err)throw err
        res.send(result)
      })
})
router.get("/v1/search",(req,res)=>{
    var m=req.query.content
    var sql=`select*from ml_index_product where title like '%${m}%';`
    pool.query(sql,(err,result)=>{
        if(err)throw err
        res.send(result)
        
    }) 
})
module.exports=router;
