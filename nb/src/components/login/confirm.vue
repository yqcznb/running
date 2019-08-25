<template>

    <div id="confirm" :backgroud="backimg">
        <div id="back_bar"> 
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy">返回</i> 
            </router-link>
            <span class="title">身份认证</span>
            <button class="modify_btn">修改信息</button>
        </div>
        <div class="msg_box">
            <span class="modify_msg">
                <label for="school_name" class="left">学校</label><input type="text" id="school_name"> <label for="school_name"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="department" class="left">院系</label><input type="text" id="department"> <label for="department"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="profes" class="left">专业</label><input type="text" id="profes"> <label for="profes"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="stuname" class="left">姓名</label><input type="text" id="stuname"> <label for="stuname"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="stunum" class="left">学号</label><input type="text" id="stunum"> <label for="stunum"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="stusex" class="left">性别</label><input type="text" id="stusex"> <label for="stusex"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="entryDate" class="left">入学日期</label><input type="text" id="entryDate"> <label for="entryDate"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span>
        </div>
        <span>{{if_modify}}</span>
    </div>

</template>
<script>
export default {
    name: 'confirm',
    data() {
        return {
            disabled:false,
        }
    },
    created(){
         axios.get('http://no37.store:8080/AK/SelectXsID',{
    params: {
        yhid:localStorage.getItem("yhid"),     
    }
}).then(response=>{
          if(response.data.yhxx!=""&&response.data.yhxx!=null&&response.data.yhxx!=undefined){
              this.disabled = true
          }
        
      })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
    },
    methods:
    {
       
        back(){
                this.$router.push({
                    path: '/footer/index'
                });
                 window.location.reload();
        },
        renzhen(){
               axios.get('http://no37.store:8080/AK/xsID',{
        params: {
            yhid:localStorage.getItem("yhid"),    
            
        }
    }).then(response=>{
           
            
        })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
        },
           
             routerRefresh() {
            window.location.reload();
        }
        }
    }
    
   
      
    

</script>
<style scoped>
    #confirm {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    a {
        text-decoration: none;
        color: #dec674;
        z-index: 1;
    }
    ul {
        list-style: none;
        float: left;
    }
    #back_bar {
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        display: flex;
        justify-content: space-between;
        z-index: 3;
        margin-bottom: 2%;
    }
    .title {
        color: #dec674;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 0;
    }
    .modify_btn {
        border: 0;
        background-color: transparent;
        color: #dec674;
        font-size: 16px;
        display: inline-flex;
        justify-content: flex-end;
    }
    .msg_box {
        /* border: 1px solid red; */
        border-radius: 7px;
        width: 93%;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 0.6);
    }
    .modify_msg {
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    label {
        display: inline-block;
        /* border: 1px solid red; */
    }
    .left {
        width: 25%;
        /* letter-spacing: 3ex; */
    }
    input {
        width: 60%;
        margin-top: 1%;
        margin-bottom: 1%;
        background-color: transparent;
        border: 0;
    }
    hr {
        width: 85%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
        color: lightgray;
    }
    .iconfont-right {
        position: relative;
        margin-right: 10px;
        font-size: 16px;
        color: #999999;
    }
</style>

