import { computed, onMounted, ref } from 'vue'

export function linkProvider() {
  const isDarkMode = ref(false)

  onMounted(() => {
    isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const defaultLinks = [{
    label: 'Anasayfa',
    icon: 'material-symbols:other-houses',
    to: { name: 'home' },
  }, {
    label: 'Hizmetlerimiz',
    icon: 'material-symbols:home-work',
    to: { name: 'projects' },
  }, {
    label: 'Bize Ulaşın',
    icon: 'material-symbols:phone-enabled',
    to: { name: 'contact' },
  }, {
    label: 'Biz Kimiz',
    icon: 'material-symbols:groups',
    to: { name: 'about' },
  }, {
    class: 'flex items-center',
    icon: 'wi:moon-alt-waning-gibbous-6',
    click: () => toggleColorMode(),
  }]

  return {
    defaultLinks,
  }
}
