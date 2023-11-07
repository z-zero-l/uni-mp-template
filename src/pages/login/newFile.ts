// 获取 code 登录凭证
export default (() => {
  const __VLS_setup = async () => {
    let code = ''
    onLoad(async () => {
      const res = await wx.login()
      code = res.code // 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 code2Session，使用 code 换取 openid、unionid、session_key 等信息
    })

    // 授权登录
    const sureToLogin = async () => {}

    const loginSuccess = (profile: LoginResult) => {}

    // 模拟手机号码快捷登录（开发练习）
    const onGetphonenumberSimple = async () => {}
    const __VLS_publicComponent = (await import('vue')).defineComponent({
      setup() {
        return {}
      }
    })

    const __VLS_componentsOption = {}

    let __VLS_name!: 'login'
    function __VLS_template() {
      let __VLS_ctx!: InstanceType<
        import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>
      > &
        InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {}
      /* Components */
      let __VLS_localComponents!: NonNullable<
        typeof __VLS_internalComponent extends { components: infer C } ? C : {}
      > &
        typeof __VLS_componentsOption &
        typeof __VLS_ctx
      let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents
      let __VLS_own!: import('./__VLS_types.js').SelfComponent<
        typeof __VLS_name,
        typeof __VLS_internalComponent &
          typeof __VLS_publicComponent &
          (new () => { $slots: typeof __VLS_slots })
      >
      let __VLS_components!: typeof __VLS_otherComponents &
        Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
      /* Style Scoped */
      type __VLS_StyleScopedClasses = {} & { login?: boolean } & { input?: boolean } & {
        button?: boolean
      } & { icon?: boolean } & { phone?: boolean } & { extra?: boolean } & { caption?: boolean } & {
        options?: boolean
      } & { icon?: boolean } & { 'icon-weixin'?: boolean } & { tips?: boolean }
      let __VLS_styleScopedClasses!:
        | __VLS_StyleScopedClasses
        | keyof __VLS_StyleScopedClasses
        | (keyof __VLS_StyleScopedClasses)[]
      /* CSS variable injection */
      /* CSS variable injection end */
      let __VLS_templateComponents!: {} & import('./__VLS_types.js').WithComponent<
        'view',
        typeof __VLS_components,
        'View',
        'view'
      > &
        import('./__VLS_types.js').WithComponent<'image', typeof __VLS_components, 'Image', 'image'> &
        import('./__VLS_types.js').WithComponent<'input', typeof __VLS_components, 'Input', 'input'> &
        import('./__VLS_types.js').WithComponent<'button', typeof __VLS_components, 'Button', 'button'> &
        import('./__VLS_types.js').WithComponent<'text', typeof __VLS_components, 'Text', 'text'>
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.View
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      __VLS_components.view
      // @ts-ignore
      ;[view, view, view, view, view, view, view, view, view, view, view, view, view, view]
      __VLS_components.Image
      __VLS_components.Image
      __VLS_components.image
      __VLS_components.image
      // @ts-ignore
      ;[image, image]
      __VLS_components.Input
      __VLS_components.Input
      __VLS_components.input
      __VLS_components.input
      // @ts-ignore
      ;[input, input]
      __VLS_components.Button
      __VLS_components.Button
      __VLS_components.Button
      __VLS_components.Button
      __VLS_components.Button
      __VLS_components.Button
      __VLS_components.button
      __VLS_components.button
      __VLS_components.button
      __VLS_components.button
      __VLS_components.button
      __VLS_components.button
      // @ts-ignore
      ;[button, button, button, button, button, button]
      __VLS_components.Text
      __VLS_components.Text
      __VLS_components.Text
      __VLS_components.Text
      __VLS_components.Text
      __VLS_components.Text
      __VLS_components.text
      __VLS_components.text
      __VLS_components.text
      __VLS_components.text
      __VLS_components.text
      __VLS_components.text
      // @ts-ignore
      ;[text, text, text, text, text, text]
      {
        __VLS_templateComponents.view
        ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) = {
          class: 'flex flex-col justify-center h-full py-2 px-5'
        }
        {
          __VLS_templateComponents.view
          ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) = {
            class: 'flex-1 text-center'
          }
          {
            __VLS_templateComponents.image
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.image>) = {
              class: 'w-[220rpx] h-[220rpx] mt-[15vh]',
              src: 'https://pic2.zhimg.com/v2-1e65155a5b96cf1879fd3cea224bba4d_b.gif'
            }
          }
        }
        {
          __VLS_templateComponents.view
          ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) = {
            class: 'login'
          }
          {
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.input>) = {
              class: 'input',
              type: 'text',
              placeholder: '请输入用户名/手机号码'
            }
          }
          {
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.input>) = {
              class: 'input',
              type: 'text',
              password: true,
              placeholder: '请输入密码'
            }
          }
          {
            __VLS_templateComponents.button
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.button>) =
              { class: 'button phone' }
          }
          {
            __VLS_templateComponents.button
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.button>) =
              { class: 'button phone' }
            const __VLS_0 = new __VLS_templateComponents.button({ class: 'button phone' })
            const __VLS_1 = __VLS_templateComponents.button({ class: 'button phone' })
            let __VLS_2!: import('./__VLS_types.js').PickNotAny<typeof __VLS_0, typeof __VLS_1>
            type __VLS_3 = import('./__VLS_types.js').InstanceProps<
              typeof __VLS_2,
              typeof __VLS_templateComponents.button
            >
            const __VLS_4: import('./__VLS_types.js').EventObject<
              typeof __VLS_2,
              'tap',
              typeof __VLS_templateComponents.button,
              __VLS_3['onTap']
            > = {
              tap: __VLS_ctx.sureToLogin
            }
            // @ts-ignore
            ;[sureToLogin]
            {
              __VLS_templateComponents.text
              ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.text>) =
                { class: 'icon icon-phone' }
            }
          }
          {
            __VLS_templateComponents.view
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) = {
              class: 'extra'
            }
            {
              __VLS_templateComponents.view
              ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) =
                { class: 'caption' }
              {
                __VLS_templateComponents.text
                ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
                  typeof __VLS_templateComponents.text
                >) = {}
              }
            }
            {
              __VLS_templateComponents.view
              ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) =
                { class: 'options' }
              {
                __VLS_templateComponents.button
                ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
                  typeof __VLS_templateComponents.button
                >) = {}
                const __VLS_5 = new __VLS_templateComponents.button({})
                const __VLS_6 = __VLS_templateComponents.button({})
                let __VLS_7!: import('./__VLS_types.js').PickNotAny<typeof __VLS_5, typeof __VLS_6>
                type __VLS_8 = import('./__VLS_types.js').InstanceProps<
                  typeof __VLS_7,
                  typeof __VLS_templateComponents.button
                >
                const __VLS_9: import('./__VLS_types.js').EventObject<
                  typeof __VLS_7,
                  'tap',
                  typeof __VLS_templateComponents.button,
                  __VLS_8['onTap']
                > = {
                  tap: __VLS_ctx.onGetphonenumberSimple
                }
                // @ts-ignore
                ;[onGetphonenumberSimple]
                {
                  __VLS_templateComponents.text
                  ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
                    typeof __VLS_templateComponents.text
                  >) = { class: 'icon icon-phone' }
                }
              }
            }
          }
          {
            __VLS_templateComponents.view
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.view>) = {
              class: 'tips'
            }
          }
        }
      }
      if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex']
        __VLS_styleScopedClasses['flex-col']
        __VLS_styleScopedClasses['justify-center']
        __VLS_styleScopedClasses['h-full']
        __VLS_styleScopedClasses['py-2']
        __VLS_styleScopedClasses['px-5']
        __VLS_styleScopedClasses['flex-1']
        __VLS_styleScopedClasses['text-center']
        __VLS_styleScopedClasses['w-[220rpx]']
        __VLS_styleScopedClasses['h-[220rpx]']
        __VLS_styleScopedClasses['mt-[15vh]']
        __VLS_styleScopedClasses['login']
        __VLS_styleScopedClasses['input']
        __VLS_styleScopedClasses['input']
        __VLS_styleScopedClasses['button']
        __VLS_styleScopedClasses['phone']
        __VLS_styleScopedClasses['button']
        __VLS_styleScopedClasses['phone']
        __VLS_styleScopedClasses['icon']
        __VLS_styleScopedClasses['icon-phone']
        __VLS_styleScopedClasses['extra']
        __VLS_styleScopedClasses['caption']
        __VLS_styleScopedClasses['options']
        __VLS_styleScopedClasses['icon']
        __VLS_styleScopedClasses['icon-phone']
        __VLS_styleScopedClasses['tips']
      }
      declare let __VLS_slots: {}
      return __VLS_slots
    }
    const __VLS_internalComponent = (await import('vue')).defineComponent({
      setup() {
        return {
          sureToLogin: sureToLogin,
          onGetphonenumberSimple: onGetphonenumberSimple
        }
      }
    })
    return {} as typeof __VLS_publicComponent
  }
  return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never
})({} as any)
