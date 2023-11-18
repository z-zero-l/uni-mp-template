<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import wSwiper from '@/components/swiper/wSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPannel from './components/HotPannel.vue'
import Guess from '@/components/guess/Guess.vue'
import type { GuessInstance } from '@/types/component'
import PageSkeleton from './components/PageSkeleton.vue'

// 是否加载中标记
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

// 获取轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 获取猜你喜欢组件实例
const guessRef = ref<GuessInstance>()
// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()]) // 关闭动画
  isTriggered.value = false
}
</script>
<template>
  <view class="viewport">
    <!-- 自定义导航栏 -->
    <CustomNavbar></CustomNavbar>
    <!-- 滚动容器 -->
    <scroll-view
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
    >
      <PageSkeleton v-if="isLoading"></PageSkeleton>
      <template v-else>
        <wSwiper :list="bannerList"></wSwiper>
        <!-- 商品分类 -->
        <CategoryPanel :list="categoryList" />
        <!-- 热门推荐 -->
        <HotPannel :list="hotList" />
        <!-- 猜你喜欢 -->
        <Guess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}
/* 设置滚动区高度 */
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
