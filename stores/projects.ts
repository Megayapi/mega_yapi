import type { Project } from '~/types'
import Ayna1 from '../assets/projects/ayna/1.jpg'
import Ayna2 from '../assets/projects/ayna/2.jpg'
import Ayna3 from '../assets/projects/ayna/3.jpg'
import Ayna4 from '../assets/projects/ayna/4.jpg'
import Ayna5 from '../assets/projects/ayna/5.jpg'
import Ayna6 from '../assets/projects/ayna/6.jpg'

import Bakim1 from '../assets/projects/bakim/1.jpg'

import CamBalkon1 from '../assets/projects/cambalkon/1.jpg'
import CamBalkon2 from '../assets/projects/cambalkon/2.jpg'

import Dusakabin1 from '../assets/projects/dusakabin/1.jpg'

import Korkuluk1 from '../assets/projects/korkuluk/1.jpg'
import Korkuluk2 from '../assets/projects/korkuluk/2.jpg'
import Korkuluk3 from '../assets/projects/korkuluk/3.jpg'
import Korkuluk4 from '../assets/projects/korkuluk/4.jpg'

import Plise1 from '../assets/projects/plise/1.jpg'
import Plise2 from '../assets/projects/plise/2.jpg'
import Plise3 from '../assets/projects/plise/3.jpg'
import Plise4 from '../assets/projects/plise/4.jpg'
import Plise5 from '../assets/projects/plise/5.jpg'

import Pvc1 from '../assets/projects/pvc/1.jpg'

import Yenileme1 from '../assets/projects/yenileme/1.jpg'

export const useProjectStore = defineStore('projects', () => {
  const _projects = [{
    name: 'Cam Balkon Sistemleri',
    description: 'Estetik ve yalıtımlı cam balkon çözümleri',
    images: [CamBalkon1, CamBalkon2],
  }, {
    name: 'Ayna Tasarımı',
    description: 'Mekana özel şık ve fonksiyonel aynalar',
    images: [Ayna1, Ayna2, Ayna3, Ayna4, Ayna5, Ayna6],
  }, {
    name: 'Yenileme',
    description: 'Eski yapıların modern ve kullanışlı hale getirilmesi',
    images: [Yenileme1],
  }, {
    name: 'Bakım ve Onarım',
    description: 'Sistemlerin ömrünü uzatan bakım ve onarım işlemleri',
    images: [Bakim1],
  }, {
    name: 'PVC',
    description: 'Isı ve ses yalıtımlı PVC pencere ve kapılar',
    images: [Pvc1],
  }, {
    name: 'Duşakabin',
    description: 'Modern ve dayanıklı duşakabin sistemleri',
    images: [Dusakabin1],
  }, {
    name: 'Plise Perde ve Sineklik',
    description: 'Konforlu alanlar için plise perde ve sineklikler',
    images: [Plise1, Plise2, Plise3, Plise4, Plise5],
  }, {
    name: 'Korkuluk',
    description: 'Güvenliği estetikle birleştiren korkuluk sistemleri',
    images: [Korkuluk1, Korkuluk2, Korkuluk3, Korkuluk4],
  }]

  const _normalize = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ş/g, 's')
      .replace(/ü/g, 'u')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
  }

  const projects = computed<Project[]>(() => {
    return _projects.map((project) => {
      return {
        ...project,
        href: `#${_normalize(project.name)}`,
        key: _normalize(project.name),
      }
    })
  })

  return {
    projects,
  }
})
