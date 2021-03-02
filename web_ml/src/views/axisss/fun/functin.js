//点击购物车的动画
import axios from "axios"
import $ from 'jquery'
//动画
export  function anmint(){
    if($(".add_animation").css("top")!=="-24px"){
      $(".add_animation").css("top","-24px")
      $(".add_animation").css("left","276px")	                    			
      }
      $(".add_animation").css("opacity","1")
      var x=$(document).scrollTop()+50
      var top= $(".button_add").offset().top
    //   console.log(310-(top-x))
      $(".add_animation").stop();
    $(".add_animation").removeClass("hild_btn")

     .animate({
      top:(210-(top-x)),
       left:830,
       opacity: 0
      },1000)
      //点击成功的时候让购物袋的数据加一
  
    //   location.href="car.html"
}
//当用户在登录状态时候 获取当前用户的id 并保存在cookie 中
export  var m= (name_id)=>{ 
       return new Promise((result)=>{  axios.get("/car/v1/user_id",{params:{user_id:name_id}}).then(res=>{
         var i=0
        for(var  key of res.data){
         i++
         }
         var arr=[]
         arr.push(i,res.data)
          result(arr) 
      })})

  }
  //修改数量的值,中数据库的值
export  var count=(count,cid)=>{
   axios.put("/car/v1/update","count="+count+"&cid="+cid).then(res=>{
  //  console.log(res.data)
  })   
}
//删除购物i车中的莫伊数据 根据 商品编号
export var dele=cid=>{
       axios.delete("/car/v1/delete",{params:{cid}}).then(res=>{
        //  console.log(res.data)
       })
} 
//购物车中计算总价 获取件数 并且 计算优惠
export var price=(arr,car)=>{
  //获取件数
    var price=arr.length
  //计算总价
	//通过 arr 中添加的  car 中的下标 来获取选中的 car 
   //遍历arr 数组获取 car 中的下标
   var n=0
   var total=0
  for(var key of arr){
    //实际总价
    total+= car[key].price*car[key].count
    //优惠钱的总价
    n+=car[key].cprice*car[key].count
  }
  //优惠金额
  var discounts=n-total
  var arr=[]
  arr.push(price,total,discounts,n)
  return arr
}
//添加支付成功的订单
export var Order=(order)=>{
  var obj={};
  obj.orde=order;
  //将对象送到服务器
  return new Promise (result=>{ axios.post("/order/v1/inster",obj
 
  ).then(res=>{
    result(res.data)
  })})
}
//根据搜索 获取数据
export var list=(content)=>{
  return new Promise((result)=>{ axios.get("list/v1/search",{params:{content}}).then(res=>{
                result(res.data)
                     })})

}
//通过点击家族分类获取信息
export var sort_t=(family_id)=>{
  return new Promise((result)=>{ axios.get("/list/v1/family",{params:{family_id}}).then(res=>{
              result(res.data)   
  })})
}
//通过用户名的id 获取当前用户的邮寄地址
export var address_pay=(uid)=>{
  return new Promise(result=>{ axios.get("/order/v1/address",{params:{uid}}).then(res=>{
     result(res.data)
  })})
}
//验证添加地址
export var add_addres=(add)=>{
      return  new Promise(result=>{axios.post("/order/v1/add_address",add).then(res=>{
        result(res.data)
      })})
}
//修改默认地址
export  var is_def=()=>{
   return  new Promise(result=>{axios.put("/order/v1/is_def").then(res=>{
       result(res.data)
   })})
}
//修改信息
export var upd_adress=(add)=>{
  return new Promise(result=>{axios.put("/order/v1/upd_adress",add).then(res=>{
    result(res.data)
  })})
}
//个人中心获取订单
export var center_aorder=(uid)=>{
  return new Promise(result=>{
    axios.get("/order/v1/center_order",{params:{uid}}).then(res=>{
      result(res.data)
    })
  })
}
//根据订单状态获取订单信息
export var state_order=(state,uid)=>{
  return new Promise(result=>{
    axios.get("/order/v1/state_order",{params:{state,uid}}).then(res=>{
      result(res.data)
    })
  })
}
//根据 id 值获取用户名的信息
export var user_list=(uid)=>{
  return new Promise(result=>{
    axios.get('/user/v1/search/id',{params:{uid}}).then(res=>{
       result(res.data)
    })
  })   
}
//修改用户信息并验重
export var updated_user=(obj)=> {
  // console.log(obj)
  return new Promise(result=>{
    axios.put('/user//v1/update',obj).then(res=>{
       result(res.data)
    })
  })
}
// export var anmint=anmint()


