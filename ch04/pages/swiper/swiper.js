// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:[
      "../../images/a.png",
      "../../images/b.png",
      "../../images/c.png",
    ],
    indicatiorDots:true,   //是否显示指示器
    veritcal:true,        //滑动方向是否为纵向
    autoplay:false,        //是否自动播放
    interval:3000,         //页面切换时间间隔
    duration:1200         //滑动动画时长
    
  },
  changeIndicatorDots: function(e){
   this.setData({
     indicatiorDots: !this.data.indicatiorDots
   })
  },
  changeVertical: function(e){
    this.setData({
      veritcal: !this.data.veritcal
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  durationChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  intervalChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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