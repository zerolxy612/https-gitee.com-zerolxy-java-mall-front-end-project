// 导入request请求工具类
import {
  getBaseUrl,
  requestUtil
} from '../../utils/requestUtil.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    baseUrl: '',
    cart:[],
    totalPrice:0,
    totalNum:0
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const baseUrl = getBaseUrl();
    this.setData({
      baseUrl
    })
  },

   // 处理订单支付
   async handleOrderPay(){
    // wx.login({
    //   timeout: 5000,
    //   success:(res)=>{
    //     console.log(res.code)
    //   }
    // })
    // let res=await getWxLogin();
    // console.log(res.code)

    // wx.getUserProfile({
    //   desc: '获取用户信息',
    //   success:(res)=>{
    //     console.log(res.userInfo.nickName,res.userInfo.avatarUrl)
    //   }
    // })

    // let res2=await getUserProfile();
    // console.log(res2.userInfo.nickName,res2.userInfo.avatarUrl)

    const token=wx.getStorageSync('token');
    if(!token){
      Promise.all([getWxLogin(),getUserProfile()]).then((res)=>{
        console.log(res[0].code);
        console.log(res[1].userInfo.nickName,res[1].userInfo.avatarUrl)
        let loginParam={
          code:res[0].code,
          nickName:res[1].userInfo.nickName,
          avatarUrl:res[1].userInfo.avatarUrl
        }
        console.log(loginParam)
        wx.setStorageSync('userInfo', res[1].userInfo);
        this.wxlogin(loginParam);
      })
    }else{
      console.log("token存在："+token);
      // 支付继续走，创建订单
      console.log("支付继续走，创建订单");
      this.createOrder();
    }
  },

   /**
   * 请求后端获取用户token
   * @param {*} loginParam 
   */
  async wxlogin(loginParam){
    const result=await requestUtil({url:"/user/wxlogin",data:loginParam,method:"post"});
    console.log(result);
    const token=result.token;
    if(result.code===0){
      // 存储token到缓存
      wx.setStorageSync('token', token);
      // 支付继续走，创建订单
      console.log("支付继续走，创建订单");
      this.createOrder();
    }
  },

  /**
   * 创建订单
   */
  async createOrder(){
    const orderParam={
      
    }
    const res = await requestUtil({url:"/my/order/create",method:"post",data:prderparam});
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show")
    const address=wx.getStorageSync('address');
    let cart=wx.getStorageSync('cart')||[];
    cart=cart.filter(v=>v.checked);
    let totalPrice=0;
    let totalNum=0;
    cart.forEach(v=>{
      totalPrice+=v.price*v.num;
      totalNum+=v.num;
    })
  
    this.setData({
      cart,
      totalNum,
      address,
      totalPrice
    })
  }

})