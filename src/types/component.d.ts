import 'vue'
import wGuess from '@/components/guess/Guess.vue'
import wSwiper from '@/components/swiper/wSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    wSwiper: typeof wSwiper
    Guess: typeof Guess
  }
}

// 组件实例类型
export type GuessInstance = InstanceType<typeof Guess>
