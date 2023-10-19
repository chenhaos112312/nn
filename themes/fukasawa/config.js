const CONFIG = {

  POST_LIST_COVER: true, // 文章列表显示图片封面
  POST_LIST_COVER_FORCE: true, // 即使没有封面也将站点背景图设置为封面
  POST_LIST_PREVIEW: true, // 显示文章预览
  RANDAM_THUMBNAIL: () => {
    //var randomNum = Math.floor(Math.random() * 10) + 1;
    // 拼接图片路径
    //var imagePath = "/images/random/" + randomNum + ".png";
    //return imagePath
    var urls = [
      "https://vip.helloimg.com/images/2023/10/19/o2pDng.png",
      "https://vip.helloimg.com/images/2023/10/19/o2pQTY.png",
      "https://vip.helloimg.com/images/2023/10/19/o2p7PX.png",
      "https://vip.helloimg.com/images/2023/10/19/o2pNqE.png",
      "https://vip.helloimg.com/images/2023/10/19/o2ppU9.png",
      "https://vip.helloimg.com/images/2023/10/19/o2pI7M.png",
      "https://vip.helloimg.com/images/2023/10/19/o2p8CP.png",
      "https://vip.helloimg.com/images/2023/10/19/o2pKt6.png",
      "https://vip.helloimg.com/images/2023/10/19/o2pUwn.png",
      "https://vip.helloimg.com/images/2023/10/19/o2pghR.png"
    ];
  
    var randomUrl = urls[Math.floor(Math.random()*urls.length)];
    return randomUrl
  },
  // 菜单
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: false, // 显示搜索

  SIDEBAR_COLLAPSE_BUTTON: true, // 侧边栏折叠按钮
  SIDEBAR_COLLAPSE_SATUS_DEFAULT: false // 侧边栏默认折叠收起

}
export default CONFIG
