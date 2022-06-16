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
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },

  handleChooseAddress(){
    wx.chooseAddress({
      success: (result) => {
        console.log(result)
        wx.setStorageSync('address', result)
      },
    })
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show")
    const address=wx.getStorageSync('address');
    const cart=wx.getStorageSync('cart')||[];
    let allChecked = true;
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v=>{
      if(v.checked){
        totalPrice+=v.price*v.num;
        totalNum+=v.num;
      }else {
        allChecked = false;
      }
    });
    allChecked=cart.length!=0?allChecked:false;
    this.setData({
      address,
      cart,
      allChecked,
      totalNum,
      totalPrice
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})