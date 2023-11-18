<!--
此文件为开发者工具生成，生成时间: 2023/11/18下午2:24:17
使用方法：
在 E:\Web\uni-mp-template\dist\dev\mp-weixin\pages\goods\goods.wxml 引入模板

```
<import src="goods.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 E:\Web\uni-mp-template\dist\dev\mp-weixin\pages\goods\goods.wxss 中引入样式
```
@import "./goods.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <scroll-view scroll-y="true" class="viewport" enable-back-to-top="true">
      <view class="goods">
        <view class="preview">
          <swiper circular="true" current="0" autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-348 sk-text">12.9</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-9 sk-text"
            >**推荐木浆懒人抹布加厚干湿两用</view
          >
          <view class="desc sk-transparent sk-text-0-0000-631 sk-text">木浆吸水吸油，热销200万卷</view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-756 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-290 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-551 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-280 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-434 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-696 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view is="node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup" class="r"></view>
      <view class="detail panel">
        <view class="title">
          <text class="sk-transparent sk-text-0-0000-780 sk-text">详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item">
              <text class="label sk-transparent sk-text-25-0000-84 sk-text">规格</text>
              <text class="value sk-transparent sk-text-25-0000-230 sk-text">单层255mm×250mm/节</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" style="padding-bottom: 34px">
      <view class="icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏</button
        >
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服
        </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view class="addcart sk-transparent sk-text-32-9268-220 sk-text" style="background-position-x: 50%">
          加入购物车
        </view>
        <view class="buynow sk-transparent sk-text-32-9268-537 sk-text" style="background-position-x: 50%">
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2023/11/18下午2:24:17

在 E:\Web\uni-mp-template\dist\dev\mp-weixin\pages\goods\goods.wxss 中引入样式
```
@import "./goods.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-348 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.1395rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-9 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-0-0000-631 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 22.6744rpx;
  position: relative !important;
}
.sk-text-14-2857-756 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-290 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-551 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-280 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-434 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-696 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-0-0000-780 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 27.907rpx;
  position: relative !important;
}
.sk-text-25-0000-84 {
  background-image: linear-gradient(transparent 25%, #eeeeee 0%, #eeeeee 75%, transparent 0%) !important;
  background-size: 100% 48.8372rpx;
  position: relative !important;
}
.sk-text-25-0000-230 {
  background-image: linear-gradient(transparent 25%, #eeeeee 0%, #eeeeee 75%, transparent 0%) !important;
  background-size: 100% 48.8372rpx;
  position: relative !important;
}
.sk-text-32-9268-220 {
  background-image: linear-gradient(
    transparent 32.9268%,
    #eeeeee 0%,
    #eeeeee 67.0732%,
    transparent 0%
  ) !important;
  background-size: 100% 71.5116rpx;
  position: relative !important;
}
.sk-text-32-9268-537 {
  background-image: linear-gradient(
    transparent 32.9268%,
    #eeeeee 0%,
    #eeeeee 67.0732%,
    transparent 0%
  ) !important;
  background-size: 100% 71.5116rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
