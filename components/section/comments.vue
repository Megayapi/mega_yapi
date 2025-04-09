<script setup lang="ts">
interface Comment {
  name: string
  text: string
  date: string
}

const comments: Comment[] = [
  {
    name: 'Ayşe K.',
    text: 'Mega Yapı ile cam balkon yaptırdık. Hem ilgi hem işçilik harikaydı. Kesinlikle tavsiye ederim.',
    date: 'Mart 2025',
  },
  {
    name: 'Mehmet T.',
    text: 'Ayna tasarımı ve montajı için çalıştık. Titiz ve zamanında teslimat için teşekkürler!',
    date: 'Ocak 2025',
  },
  {
    name: 'Zeynep Y.',
    text: 'Duşakabin sistemleri hem şık hem dayanıklı. Gönül rahatlığıyla öneriyorum.',
    date: 'Nisan 2025',
  },
  {
    name: 'Hasan D.',
    text: 'PVC kapı ve pencereler tam istediğimiz gibi oldu. Uygun fiyat ve kaliteli hizmet.',
    date: 'Mayıs 2025',
  },
  {
    name: 'Elif S.',
    text: 'Çok ilgili ve samimi bir ekip. Her aşamada bilgilendirildik.',
    date: 'Haziran 2024',
  },
  {
    name: 'Murat A.',
    text: 'Cam korkuluk sistemleri modern bir hava kattı. Ellerinize sağlık!',
    date: 'Temmuz 2024',
  },
  {
    name: 'Gülşen E.',
    text: 'Sineklik montajı hem hızlı hem tertemiz yapıldı.',
    date: 'Ağustos 2024',
  },
  {
    name: 'Selim B.',
    text: 'Duşakabin camı beklediğimizden daha kaliteli çıktı. Teşekkürler!',
    date: 'Eylül 2024',
  },
]
</script>

<template>
  <section id="comments" class="w-full py-20 lg:px-6">
    <div class="lg:w-9/12 w-11/12 mx-auto text-left">
      <h2 class="text-3xl font-semibold mb-10 tracking-tight">
        Müşteri Yorumları
      </h2>

      <!-- Scrollable container (mobile) -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(comment, i) in comments"
          :key="i"
          class="rounded-xl border border-neutral-400/10 bg-neutral-400/5 p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <p class="text-sm leading-relaxed italic opacity-90">
            “{{ comment.text }}”
          </p>
          <div class="mt-4 text-right text-xs opacity-60">
            — {{ comment.name }}<br>
            <span>{{ comment.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
