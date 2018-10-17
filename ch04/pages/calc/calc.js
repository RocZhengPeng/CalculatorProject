// pages/calc/calc.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: "0",
    id1: "history",
    id2: "clear",
    id3: "back",
    id4: "div",
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul", //乘
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "num_sub", //减
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add", //加
    id17: "negative", //取负
    id19: "num_0",
    id19: "dot", //小数点
    id20: "equ" //等号
  },
  clickButton: function(e) { //单击事件处理函数
    var data = this.data.result; //获取上一个结果值
    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') { //判断是否按了数字按钮
      data += e.target.id.split("_")[1]; //正常情况，串接输入的值
      if (this.data.result == '0') { //原值为0
        data = e.target.id.split("_")[1]; //用输入的值替代
      }
    }else{//不是數字按鈕
      console.log(e.target.id);
    }
    this.setData({
      result:data//更新結果值
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})