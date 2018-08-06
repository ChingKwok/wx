//index.js
//获取应用实例
const app = getApp()
var topProduceUrl = 'http://localhost:12238/back/BackSer.asmx/getWxIndexProduce'
var requestUrl = 'http://localhost:12238/back/BackSer.asmx/getIndexData'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_produce: [],
    imgs: [
      '../image/swiper_1.jpg',
      '../image/passage_img.jpg',
      '../image/case_img.jpg',
      '../image/swiper_4.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    inputShowed: false,
    inputVal: "",
    logo_1: '../image/home.png',
    logo_2: '../image/produce.png',
    logo_3: '../image/passage.png',
    logo_4: '../image/case.png',
    show_1: '../image/show_1.png'
  },
  sw_detail: function() {
    wx.navigateTo({
      url: '../detail/detail',
    })

  },

  sw_case: function() {
    wx.navigateTo({
      url: '../case/case',
    })
  },

  sw_passage: function() {
    wx.navigateTo({
      url: '../passage/passage',
    })
  },

  sw_category: function() {
    wx.switchTab({
      url: '../category/category',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: topProduceUrl,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'JSON',
      method: 'POST',
      success: function(res) {
        //格式化数据
        // console.log(res.data)
        var jsonstr = res.data;
        jsonstr = jsonstr.replace(" ", "");
        jsonstr = jsonstr.replace(/\ufeff/g, "");
        console.log(jsonstr)
        var jj = JSON.parse(jsonstr);
        console.log(jj.rows)
        that.setData({
          top_produce: jj.rows
        })
      },
      fail: function(err) {
        console.log(err)

      }
    })
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

  },

})