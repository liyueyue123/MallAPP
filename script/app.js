var host = 'http://hande.icpnt.com';


//监听屏幕变化，自动设置rem根元素
!(function(doc, win) {
    var docEle = doc.documentElement, //获取html元素
        event = "onorientationchange" in window ? "orientationchange" : "resize", //判断是屏幕旋转还是resize;
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 10 * (width / 360) + "px"); //设置html的fontSize，随着event的改变而改变。
        };

    win.addEventListener(event, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));


// 下拉刷新模块
function pullToRefresh() {
  // 进入页面进行刷新
  api.refreshHeaderLoading();

  // 下拉时
  api.setCustomRefreshHeaderInfo({
      bgColor : '#f0f0f0',
      image : {
          pull : 'widget://image/common/pull.png',
          transform : [
            'widget://image/common/pull_end_image_frame_01.png',
            'widget://image/common/pull_end_image_frame_02.png',
            'widget://image/common/pull_end_image_frame_03.png',
            'widget://image/common/pull_end_image_frame_04.png',
            'widget://image/common/pull_end_image_frame_05.png'
        ],
          load : [
            'widget://image/common/refreshing_image_frame_01.png',
            'widget://image/common/refreshing_image_frame_02.png',
            'widget://image/common/refreshing_image_frame_03.png',
            'widget://image/common/refreshing_image_frame_04.png',
            'widget://image/common/refreshing_image_frame_05.png',
            'widget://image/common/refreshing_image_frame_06.png'
        ]
      }
  }, function() {
      //下拉刷新被触发，自动进入加载状态，使用 api.refreshHeaderLoadDone() 手动结束加载中状态
      setTimeout(function(){
        api.refreshHeaderLoadDone()
      }, 2000);
  });
}


// 上拉加载模块
function pullUpLoading(){
  api.addEventListener({
          name:"scrolltobottom",
          extra:{
               threshold:0            //设置距离底部多少距离时触发，默认值为0，数字类型
          }
  },function(ret,err){
    alert('加载成功')
  });
}
