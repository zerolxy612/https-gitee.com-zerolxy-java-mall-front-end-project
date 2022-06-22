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
    productList:[], //商品数组
    inputValue:"", //输入框的值
    isFocus:false //取消按钮是否显示
  },

  //处理input事件
  handleInput(e){
    const {value} =  e.detail;
    if(!value.trim()){
      this.setData({
        productList:[],
        isFocus:false
      })
      return;
    }

    this.setData({
      isFocus:true
    })
    this.search(value);
  },

   /**
   * 商品搜索
   */
  async search(q) {
    const result = await requestUtil({
      url: '/product/search',
      data:{q}
    });
    this.setData({
      productList:result.message
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})