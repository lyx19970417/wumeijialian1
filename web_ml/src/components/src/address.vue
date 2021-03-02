<template>
    <div>
        <div class="dss">
             <h2>选择收货地址</h2> 
                <ul class="pay_list d-flex " >
                    <li class="ue_pay" v-for="(item,index) of address" :key="index" @click="flges(index)">
                        <div class="uname_pay slice-border d-flex">
                            <em class="f1_pay ico-user"></em>
                            <span class="s1_pay" v-text="item.name"></span>
                        </div>
                        <div class=" wei_pay slice-border d-flex">
                            <em class="f2_pay ic0-add"></em>
                            <span class="s2_pay" v-text="item.prov+' '+item.city+' '+item.county"></span>
                        </div>
                        <div class="phome_pay slice-border d-flex">
                            <em class="f3_pay ico-phone"></em>
                            <span class="s3_pay" v-text="item.phone"></span>
                            <a  class="f4_pay" @click="update(index,item.aid)" href="javascript:;">修改</a>
                        </div>
                        <div class="slt-ico" >
                            <div class="f5_pay" v-if="item.is_default">默认地址</div>
                            <div class="f6_pay" v-if="item.flge"></div>
                        </div>
                  </li>
                 <li class="item_list" @click="add_address()">
                       <a href="javascript:;">
                           <em></em>
                            新增地址
                       </a>
                 </li>
              </ul>
                <div style="" class="panel-box" >
                   <div id="adr" class="adr" v-if="flge">
                        <ul>
                           <li>
                               <label style="margin-left:12px;">收货人：</label>
                               <input type="text"  maxlength="16" size="40" id="truename" name="name" v-model="name" class="text w250" placeholder="只包含汉字、数字和字母,长度不超过16个字">
                          </li>
                           <li>
                               <label>手机号码：</label>
                               <input type="text" class="text w195" tabindex="2" maxlength="11" size="11" id="mobile" name="mobile"  v-model="phone">
                          </li>
                           <li>
                              <label>所在地区：</label>
                               <select tabindex="3" id="province" name="province" class="w200"  v-model="select_prov">
                                    <option>选择省份</option><option v-for="(item,index) of prov" :key="index" v-text="item"></option>
                              </select>
                               <select tabindex="4" id="city" name="city" class="w200" v-model="select_city" >
                                    <option>选择城市</option>
                                    <option v-for="(item,index) of city" :key="index" v-text="item"></option>
                               </select>
                                <select tabindex="5" id="town" name="town" class="w200" v-model="select_county">
                                   <option>选择区域</option>
                                   <option v-for="(item,index) of county" :key="index" v-text="item"></option>
                              </select>
                          </li>
                           <li>
                              <label>街道地址：</label>
                              <input type="text" class="text addr-long w250" maxlength="40" size="40" id="addr" v-model="selsect_adres" placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息">
                          </li>
                           <li>
                              <label style="width:70px;"></label>
                              <input type="checkbox" class="set-check" name="primary" id="J_SetDefault"  v-model="checked" checked="checked">
                              <label class="set" for="J_SetDefault">设置为默认收货地址</label>
                          </li>
                           <li >
                            <label></label>
                           <!-- <input id="addr_token" name="addr_token" type="hidden" value="" > -->
                             <input type="button" tabindex="8" value="保 存" class="smt smt1 baocun" style="margin-left:70px" @click="save">
                             <input type="button" tabindex="9" value="取 消" class="smt smt2 quxiao" @click="unhide">
                         </li>
                      </ul>
                  </div>
             </div>
          </div>      
  </div>
</template>
<script>
export default {
    data() {
        return {
            ok_adress:"",
             //地址信息
           address:[],
           //显示开关
           flge:false ,
           //收货人的姓名
           name:"",
           //收货人的电话
           phone:"",
           //储存省的数组
           prov:"",
           //当前选择的省
           select_prov:"",
           //当前选择的市
           select_city:"",
           //储存所有该省下的市
           city:"",
           //储存对应市下的所有县
           county:"",
           //绑定当前所选择的县
           select_county:"",
           //获取详细地址
           selsect_adres:"",
           //单选框绑定 为1 的时候为选中 0 为不选中
           checked:true,
           //保存数据是修改 还是新增的状态
           n:"",
           //储存修改的 id 值 传入接口
           aid:"",
           //储存修改的数组中的下标值
           i:-1, 
        }
    },
    methods: {
         //点击的时候选择的使用地址
        flges(i){
            //先去除原先的选中的
            //先遍历该素组
            for(var  key of this.address){
                //找到当前选中的地址, //再去除先前选中的地址 让flge 变为 false
                if(key.flge) key.flge=false
            }
          //再让但钱点击的元素选中
          //i 为当前点击的下标
          this.address[i].flge=true
          //跟换选中元素的下标
          this.i=i
          //显示 下帆帆订单确定的地址
          this.ok_adress=this.address[i].prov+" "+this.address[i].city+" "+this.address[i].county+" "+this.address[i].adres
          this.$emit('change',this.ok_adress,this.i,this.address)
        },
        //点击新加地址
        add_address(){
            //flge 为true 时显示 
            this.flge=true
            //传入当前显示的来源 1 为新增 0 为修改
            this.n=1
        },
        update(i,aid){
      
         //传入显示的状态
          this.n=0
          //储存当前修改的id 值
          this.aid=aid
          this.i=i
          //给界面中传入当前要修改的值
          // i为下标
          this.$emit('change',this.ok_adress,this.i,this.address)
          this.name=this.address[i].name
          this.phone=this.address[i].phone
          this.select_prov=this.address[i].prov
          this.checked=this.address[i].is_default
            //点击时候显示 修改界面
        this.flge=true
        },
        //点击取消
        unhide(){
            //隐藏 添加地址信息的div  flge=false
            this.flge=false
        },
        //点击保存的时候
        save(){
            //先进行验证输入的信息
            //非空验证，城市初始值验证
      if(this.name==""){
        this.$alert('收货人不能为空', '地址信息', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                    type: 'info',
                    message: `收货人不能为空`
            });
            }
        });
        return
      }else if(this.phone==""){
            this.$alert('手机号不能为空', '地址信息', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                    type: 'info',
                    message: `手机号不能为空`
            });
            }
        });
        return
      }else if(this.select_prov=="选择省份"|| this.select_city=="选择城市" || this.select_county=="选择区域"){
             this.$alert('所在地区不能为空', '地址信息', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                    type: 'info',
                    message: `所在地区不能为空`
            });
            }
        });
        return
      }else if(this.selsect_adres==""){
            this.$alert('街道地址不能为空', '地址信息', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                    type: 'info',
                    message: `街道地址不能为空`
            });
            }
        });
        return
      }
      //手机号格式的验证
      var reg=/^1[3-9]\d{9}$/
       if(reg.test(this.phone)==false){
           this.$alert('手机号不合法', '地址信息', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                      type: 'info',
                      message: `请输入合法的手机号`
                    })
                }
            }) 
        return;
       }                             
         //将当前的元素信息保存在一个对象中然后
         //首先将所有信息添加到对象中
         //1 县发送请求判断数据库中是否含有该地址 如果存在 则提示该信息存在 如果不存在则保存数据在数据库中保存在 t储存渎职信息的数组里
         var add={"user_id":this.$store.state.uid, "name":this.name,"phone":this.phone,"prov":this.select_prov,"city":this.select_city,
         "county":this.select_county,"adres":this.selsect_adres,"is_default":this.checked}
         //this.n==0 为修改地址 1为add 新增地址
         if(this.n==0){
             //添加当前修改的 id 值
             add.aid=this.aid
             //默认地址是唯一的
             //判断当前修改的地址是否为默认地址
             //如果当前修改的地址不是默认地址
             //则要将原默认地址去除
             if(this.address[this.i].is_default==false){
                   //弱国当前地址不是默认地址
                   //判断 当前地址是否修改为默认地址
                   if(this.checked){
                       //如果修改为默认地址
                       //去除原默认地址
                       //遍历储存地址的数组找到默认的地址
                       for(var key of this.address){
                           //如果存在 则有默认地址
                           if(key.is_default){
                              key.is_default=false
                            //调用 去除默认值的请求
                             this.is_def().then(res=>{})
                           }
                        } 
                   }
             }
             //传递修改的数据给服务器 发送 axios  请求
             this.upd_adress(add).then(res=>{
                if(res=="1"){
                //修改成功
                //如果选中 为默认值
                   if(this.checked){
                  //去除原先选择的
                  for(var key of this.address){
                      key.flge ?  key.flge=false : ""
                  }
                  //将添加的 默认地址选中
                  add.flge=true
              }
               //根据下标跟新当前的修改的数据
               this.address[this.i]=add
               //修改获关联地址
                this.ok_adress=add.prov+" "+add.city+" "+add.county+" "+add.adres
               this.$emit('change',this.ok_adress,this.i,this.address)              
              this.flge=false
                }
             })
             
         }else if(this.n==1){
         //当 this.n  的值为1 的时候 为添加新地址
            if(this.checked){
               //遍历当前数组查看是否有默认地址
               for(var key of this.address){
                   //如果存在 则有默认地址
                    if(key.is_default){
                        key.is_default=false
                        //调用 去除默认值的请求
                        this.is_def().then(res=>{
                        })
                    }
               }
            }
            //调用增加 地址的axios 的请求
         this.add_addres(add).then(res=>{
             //获取到的值为0 的 说明地址信息已经纯在
            if(res=="0"){
                this.$alert('地址重复', '地址信息', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `地址重复`
                        })
                    }
                }) 
            }else{
                //因默认地址只有一个 当 is_default 为 true  时 则需要去除旧的默认地址
                //普安段添加的是否为默认地址 如果是 选中默认地址
              if(this.checked){
                  //去除原先选择的
                  for(var key of this.address){
                      key.flge ?  key.flge=false : ""
                  }
                  //添加 id 值便于修改
                  add.aid=this.address.length+1
                  //将添加的 默认地址选中
                  add.flge=true
                  //赋值选中的 i下标
                  this.i=this.address.length
              }
              this.address.push(add)
              this.$emit('change',this.ok_adress,this.i,this.address)
              this.flge=false
            }
         })
        } 
        },
    },
     watch: {
        //通过监听开关的值 就是 添加地址的 div 的显示 
        flge:function(newVale,oldVale){
            //当开关为true 的时候  显示增加地址 div
             if(newVale){
                 //给省份这给变量赋值 中国所有的的省份
                 //object.keys(this.cities) 获取 这个对象的键值
                 this.prov=Object.keys(this.cities)
             }
        },
        //监听省份下来菜单的变化
        select_prov: function(newValue,oldValue){
            //newvlaue位新值
            //初始化市下拉菜单 当省份值改变的时候
             this.select_city="选择城市"
             //判断新的值不是出生值时 获取改省下的所有市
            if(newValue!=="选择省份"){
                //this.cities 通过该省份去查找对应的市
              var city= this.cities[newValue]
            //获取到的 city 为一个对象
                 //object.keys(city) 获取 这个对象的键值 键值为 市
              this.city=Object.keys(city)
            }
        },
        //监听城市的变化
        select_city:function(newVale,oldVale){
          //newVale新值,oldVale旧值
          //当市发生改变的时候 初始化 县的值
           this.select_county="选择区域"
          //当 市发生改变的时候不是初始值的时候
          if(newVale!=="选择城市"){
              //通过获取当前选择的省和市区屈辱的当前的市
              this.county=this.cities[this.select_prov][this.select_city]
          } 
        }
    },
    mounted() {
        //显示的出生值 省 市 县
           this.select_prov="选择省份"
           this.select_city="选择城市"
           this.select_county="选择区域"
        //首次加载的时候要获取当前用户吗的地址
        if(this.$store.state.isLogin==1){
            this.address_pay(this.$store.state.uid).then(res=>{
                //遍历得到的数组添加 lflge 属性 控制选择
                for(var key of res){
                    //给对象中添加 flge  属性  将默认地址中的 flge 为true 其他的为fase
                   if(key.is_default){
                       //订单确认地址的初始值为默认地址
                       this.ok_adress=key.prov+" "+key.city+" "+key.county+" "+key.adres
                       key.flge=true
                   }else{
                       key.flge=false
                   }
                 
                }
               this.address=res
                for(var i=0; i<this.address.length; i++){
                   if(this.address[i].is_default){
                       this.i=i
                   }   
                }
                  this.$emit('change',this.ok_adress,this.i,this.address)
            })
        }  
    },
}
</script>