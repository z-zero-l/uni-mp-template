import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<LoginResult>()
    // 保存会员信息，登录时使用
    const setProfile = (val: LoginResult) => {
      profile.value = val
    }
    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }
    // return
    return {
      profile,
      setProfile,
      clearProfile
    }
  },
  {
    unistorage: true // 开启后对state的数据读写都将持久化
  }
)
