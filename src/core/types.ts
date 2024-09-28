import type { RouteMeta, Router } from 'vue-router'

import type { MenuItem } from 'primevue/menuitem'
import type { App } from 'vue'
import type { I18n } from 'vue-i18n'

export type RVModule = (ctx: { app: App<Element>; router: Router; i18n: I18n }) => void

export interface NavItem extends MenuItem {}

export interface RVMeta extends RouteMeta {
  requiresRole?: string[]
  requiresIsAppPlanUser?: boolean
  requiresIsPushNotificationUser?: boolean
  requiresIsExportUser?: boolean
  requiresIsDeleteIntegratorUser?: boolean
  requiresIsAppPlansUser?: boolean
  requiresIsActivityLogUser?: boolean
  requiresIsAppOrderUser?: boolean
}

export interface Company {
  name: string
  img: string | ArrayBuffer
  offer: string
  phone: string
  cellPhone: string
  email: string
  instagram: string
  instagramLink: string
  country: string
  city: string
  address: string
  about: string
}

export interface Admin {
  password: string
}

export interface Team {
  id: string
  name: string
  img: string | ArrayBuffer
  about: string
}

export interface Work {
  id: string
  name: string
  about: string
}

export interface BestWork {
  img: string | ArrayBuffer
  id: string
}

export interface Cowork {
  name: string
  id: string
}
