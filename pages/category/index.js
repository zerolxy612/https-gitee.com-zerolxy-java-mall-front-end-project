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
    leftMenuList:[], // 左侧菜单数据
    rightContext:[] // 右侧商品数据

  },
// 所有商品类别数据
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCates();
  },

    // 获取商品分类数据
    async getCates() {
      const result = await requestUtil({
        url: '/bigType/findCategories',
        method: "GET"
      });
      this.Cates = result.message;
      this.Cates.map((v)=>{
        return v.name
      })
      let leftMenuList = this.Cates.map(v=>v.name)
      let rightContext = this.Cates[0].smallTypeList;
      this.setData({
        leftMenuList,
        rightContext
      })


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