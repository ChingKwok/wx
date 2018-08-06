var Url = 'http://localhost:12238/back/BackSer.asmx/getWXCompanyInfo'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    com_detail:'',
    imgUrls: [
      '../image/demo.jpg',
      '../image/demo.jpg',
      '../image/demo.jpg',
      '../image/demo.jpg',
      '../image/demo.jpg',
      '../image/demo.jpg'
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
    show_1: '../image/company_img.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: Url,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        //格式化数据
        console.log(res.data)
        var json = res.data;
        console.log(json.rows)
        that.setData({
          Case: json.rows,
          com_detail: json.rows[0].JSON_details
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

  }
})