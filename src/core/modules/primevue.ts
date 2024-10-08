import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import Ripple from 'primevue/ripple'
import AnimateOnScroll from 'primevue/animateonscroll'

import type { App } from 'vue'
import type { RVModule } from '~/core/types'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

export const install: RVModule = ({ app }: { app: App<Element> }) => {
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)
  app.directive('animateonscroll', AnimateOnScroll)
  app.use(ConfirmationService)
  app.use(DialogService)
  app.use(ToastService)
  app.use(PrimeVue, { ripple: true })
}
