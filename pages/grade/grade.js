// pages/grade/grade.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header: {
		    homeCapsule: true,
		    title: '我的成绩',
		    fontColor: "#333333",
		    headerbg: '#F5F5F5',
		    hiddenBlock: false,
		    slot: false,
		    src:'../../assets/image/fsback.png'
        },
        course:["全部成绩","机构成绩","学校成绩"],
        display:"none",
        type:["创意美术","素描"]
    },
    btnClick(){
        this.setData({
            display:""
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