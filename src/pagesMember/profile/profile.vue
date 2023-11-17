<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 创建Store对象
const memberStore = useMemberStore()
// 生命周期函数，用于监听页面，小程序页面被加载时自动调用
onLoad(() => {
  getMemberProfileData()
})

// 获取个人信息
const fullLocation = ref<string>('') // 完整地区
const profile = ref({} as ProfileDetail)
const getMemberProfileData = async () => {
  const res = await getMemberProfileAPI()
  profile.value = res.result
  // codeToText[地区码]匹配地区名称，elment-china-area-data里的code去掉了末尾的0，需要正则表达式替换
  fullLocation.value =
    codeToText[profile.value.provinceCode?.replace(/0+$/, '')] +
    ' ' +
    codeToText[profile.value.cityCode?.replace(/0+$/, '')] +
    ' ' +
    codeToText[profile.value.countyCode?.replace(/0+$/, '')]
}

// 更新会员头像
const onAvatarChange = () => {
  // 调用拍照/选择图片
  uni.chooseMedia({
    count: 1, // 文件个数
    mediaType: ['image'], // 文件类型
    success: (res) => {
      const { tempFilePath } = res.tempFiles[0] // 本地路径
      // 文件上传
      uni.uploadFile({
        url: '/user/profile/avatar',
        name: 'file', // 后端数据库字段名
        filePath: tempFilePath, // 新头像
        success: (res) => {
          // 状态码判断是否上传成功
          if (res.statusCode === 200) {
            // 提取头像
            const avatar = JSON.parse(res.data).result
            // 当前页面更新头像
            profile.value!.avatar = avatar
            // 更新Store头像
            memberStore.profile!.avatar = avatar
            uni.showToast({ icon: 'success', title: '更新成功' })
          } else {
            uni.showToast({ icon: 'error', title: '出现错误' })
          }
        }
      })
    }
  })
}

// 修改会员信息
// 修改性别
const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profile.value.gender = parseInt(ev.detail.value) as Gender
}
// 修改生日
const onBirthdayChange: UniHelper.DatePickerOnChange = (ev) => {
  profile.value.birthday = ev.detail.value
}
// 修改城市
const onFullLocationChange: UniHelper.RegionPickerOnChange = (ev) => {
  fullLocation.value = ev.detail.value.join(' ') // 修改前端界面
  let code = ev.detail.code! // 存入profile，提交后端更新
  profile.value.provinceCode = code[0]
  profile.value.cityCode = code[1]
  profile.value.countyCode = code[2]
}
// 保存提交表单
const onSubmit = async () => {
  const { nickname, gender, birthday, profession, provinceCode, cityCode, countyCode } = profile.value
  const res = await putMemberProfileAPI({
    nickname,
    gender,
    birthday,
    profession,
    provinceCode,
    cityCode,
    countyCode
  })
  // 更新Store昵称
  profile!.value.nickname = res.result.nickname
  uni.showToast({ icon: 'success', title: '保存成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 400)
}
</script>
<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-cl ass="none"></navigator>
      <view class="title">个⼈信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" @tap="onAvatarChange" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <!-- 账号 -->
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile.account }}</text>
        </view>
        <!-- 昵称 -->
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile.nickname" />
        </view>
        <!-- 性别 -->
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="0" color="#27ba9b" :checked="profile?.gender === 0" />男
            </label>
            <label class="radio">
              <radio value="1" color="#27ba9b" :checked="profile?.gender === 1" />⼥
            </label>
          </radio-group>
        </view>
        <!-- 生日 -->
        <view class="form-item">
          <text class="label">⽣⽇</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profile.birthday"
            @change="onBirthdayChange"
          >
            <view v-if="profile?.birthday">{{ profile.birthday }}</view>
            <view class="placeholder" v-else>请选择⽇期</view>
          </picker>
        </view>
        <!-- 城市 -->
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            mode="region"
            :value="fullLocation?.split('')"
            @change="onFullLocationChange"
          >
            <view class="placeholder" v-if="fullLocation.includes('undefined')">请选择城市</view>
            <view v-else> {{ fullLocation }}</view>
          </picker>
        </view>
        <!-- 职业 -->
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="profile.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>
<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    background-color: rgb(39, 186, 155);
    color: #fff;
    line-height: 80rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 40rpx;
  }
}
</style>
