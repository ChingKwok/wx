Page({
  data:{
    src:"../image/kefu.jpg",
    text_phone:'电话联系',
    text_1:'留言板',
    phone_number:'020-84791778',
    msg:'../image/msg1.jpg'
  },
  switchtopost:function(){
    wx.navigateTo({
      url: '../msg_post/msg_post',
    })
  },
  sw_mymsg:function(){
    wx.navigateTo({
      url: '../my_msg/my_msg',
    })
  },
  sw_remsg:function(){
    wx.navigateTo({
      url: '../re_msg/re_msg',
    })
  },
  calling:function(){
    wx.makePhoneCall({
      // 此处更换客服热线
      phoneNumber: '020-84791778',
    })
  }
})