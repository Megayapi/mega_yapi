import '~/assets/styles/layout.css'

import auraDarkBlue from '~/assets/styles/themes/aura/dark/blue/theme.css?url'

export const appMode = ref('v-boxed')

export const themeLinks = reactive([
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: computed(() => auraDarkBlue),
  },
])
