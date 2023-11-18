import 'vue'
import wGuess from '@/components/wGuess/wGuess.vue'
import wSwiper from '@/components/wSwiper/wSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    wSwiper: typeof wSwiper
    wGuess: typeof wGuess
  }
}

// 组件实例类型
export type wGuessInstance = InstanceType<typeof wGuess>
