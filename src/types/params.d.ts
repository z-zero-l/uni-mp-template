declare type LoginResult = {
  /** 用户id */
  id: number
  /** 头像 */
  avatar: string
  /** 账户名 */
  account: string
  /** 昵称 */
  nickname: string
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}

declare type LoginParams = {
  code: string
}
