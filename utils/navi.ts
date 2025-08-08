export async function navigateToSection(targetId: string) {
  const route = useRoute()
  const router = useRouter()

  if (route.name !== 'home') {
    sessionStorage.setItem('scrollToSection', targetId)

    await router.push({ name: 'home' })
  }
  else {
    scrollToSection(targetId)
  }
}

function scrollToSection(id: string) {
  const el = document.querySelector(`#${id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
