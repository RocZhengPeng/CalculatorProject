// pages/calc/calc.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: "0",
    lastoper: "",
    temp: "0",
    flag: "false",
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
    id12: "sub", //减
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add", //加
    id17: "negative", //取负
    id19: "num_0",
    id19: "dot", //小数点
    id20: "equ", //等号
    record: true,
    expr: "", //表达式
  },
  clickButton: function(e) { //单击事件处理函数
    var data = this.data.result; //获取上一个结果值

    var temp = this.data.temp; //取上一次的临时结果
    var lastoper1 = this.data.lastoper; //上一次的运算符
    var noNumFlag = this.data.flag; //上一次非数字按钮标志

    var exprl = this.data.expr; //获取前面的表达式

    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') { //判断是否按了数字按钮
      data += e.target.id.split("_")[1]; //正常情况，串接输入的值
      if (this.data.result == '0') { //原值为0
        data = e.target.id.split("_")[1]; //用输入的值替代
      }
      noNumFlag = false;
    } else { //不是數字按鈕
      noNumFlag = true;
      console.log(e.target.id);
      if (e.target.id == "dot") { //小数点
        if (data.toString().indexOf(".") == -1) { //输入的值中不包含小数点
          data += ".";
        }
      } else if (e.target.id == "clear") { //清除按钮
        exprl = exprl.substr(0, exprl.length - 1) + "=" + temp; //删除最后的运算符
        // if (this.data.record) {
        //   wx.setStorageSync("expr", exprl)
        // }
        this.savaExprs(exprl);
        exprl = "";

        data = 0; //数据请0
        temp = 0; //清除中间结果
        lastoper1 = ""; //设置上次运算符为加
      } else if (e.target.id == "negative") { //数据取负
        data = -1 * data;
      } else if (e.target.id == "back") { //回退一个字符
        if (data.toString().length > 1) { //长度超过1位数
          data = data.substr(0, data.toString().length - 1); //去掉最后一位
        } else { //长度只有一位
          data = 0;
        }
      }
      if (e.target.id == "history") {
        wx.navigateTo({
          url: '../history/history',
        })
      } else if (e.target.id == "div") { //除法
        exprl += data.toString() + "÷"; //生成表达式
        if (lastoper1 !== "") {
          data = this.calculate(temp, lastoper1, data);
        }
        lastoper1 = "/";
        temp = data;
        data = 0;
      } else if (e.target.id == "mul") { //乘法
        exprl += data.toString() + "*"; //生成表达式
        if (lastoper1 !== "") {
          data = this.calculate(temp, lastoper1, data);
        }
        temp = data;
        data = 0;
        lastoper1 = "*";
      } else if (e.target.id == "add") { //加法
        exprl += data.toString() + "+"; //生成表达式
        if (lastoper1 !== "") {
          data = this.calculate(temp, lastoper1, data);
        }
        temp = data;
        data = 0;
        lastoper1 = "+";
      } else if (e.target.id == "sub") { //减法
        exprl += data.toString() + "-"; //生成表达式
        if (lastoper1 !== "") {
          data = this.calculate(temp, lastoper1, data);
        }
        temp = data;
        data = 0;
        lastoper1 = "-";
      } else if (e.target.id == "equ") { //等号
        exprl += data.toString(); //生成表达式


        if (lastoper1 !== "") {
          data = this.calculate(temp, lastoper1, data);
        }
        exprl += "=" + data;
        // if(this.data.record){
        //   wx.setStorageSync("expr", exprl);
        // }
        this.savaExprs(exprl);
        exprl = "";
        temp = 0;
        lastoper1 = "";
      }
    }
    this.setData({
      result: data, //更新結果值
      lastoper: lastoper1,
      temp: temp,
      flag: noNumFlag,
      expr: exprl
    })
  },
  savaExprs: function (expr) {
    var exprs = wx.getStorageSync("exprs") || [] //获取本地缓存
    exprs.unshift(expr); //在数组开头新增一个元素
    wx.setStorageSync('exprs', exprs); //保存到本地缓存
  },
  calculate: function(data1, oper, data2) {
    var data;
    data1 = parseFloat(data1);
    data2 = parseFloat(data2);
    switch (oper) {
      case "+":
        data = data1 + data2;
        break
      case "-":
        data = data1 - data2;
        break
      case "*":
        data = data1 * data2;
        break
      case "/":
        if (data2 !== 0) {
          data = data1 / data2;
        } else {
          data = 0;
        }
        break

    }
    return data;
  },
  RecordHistory: function(e) {
    console.log(e);
    this.setData({
      record: e.detail.value
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