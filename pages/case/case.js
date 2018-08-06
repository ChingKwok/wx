var SuccessCaseUrl = 'http://localhost:12238/back/BackSer.asmx/getWxSucCase'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Case: [],
    Case_img_1: '../image/book.png',
    case_img: '../image/case_img.jpg',
    show_1: '../image/case_img_1.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: SuccessCaseUrl,
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
          Case: jj.rows
        })
      },
      fail: function(err) {
        console.log(err)

      }
    })
  },
  case_detail: function(event) {
    console.log(event)
    //获取被点击案例的内容
    var content = event.currentTarget.dataset.id
    console.log(content)
    wx.navigateTo({
      url: '../case_detail/case_detail?content='+content,
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