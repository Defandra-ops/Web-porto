<script setup lang="ts">
import { ref } from "vue";

const pillars = {
  frontend: {
    title: "Frontend Engineering",
    eyebrow: "01 / INTERFACE",
    stack: ["Vue 3", "Astro", "Tailwind CSS"],
    description:
      "Antarmuka yang responsif, komponen yang terstruktur, dan pengalaman yang tetap cepat di berbagai perangkat.",
    color: "coral",
  },
  fullstack: {
    title: "Backend & API",
    eyebrow: "02 / SYSTEMS",
    stack: ["REST API", "Database", "Integrasi"],
    description:
      "Alur data yang mudah dipahami, terhubung dengan baik, dan dirancang sesuai kebutuhan produk.",
    color: "teal",
  },
  support: {
    title: "IT Support & Infra",
    eyebrow: "03 / OPERATIONS",
    stack: ["Troubleshooting", "Network", "Deployment"],
    description:
      "Pendekatan praktis untuk diagnosis masalah, dukungan pengguna, dan keandalan operasional.",
    color: "yellow",
  },
} as const;

type PillarId = keyof typeof pillars;
const activeTab = ref<PillarId>("frontend");
</script>

<template>
  <section class="inspector" aria-label="Pilih fokus keahlian">
    <div class="inspector-topline">
      <span class="micro-label">FOCUS INSPECTOR</span>
      <span class="live-status"><i aria-hidden="true"></i> READY</span>
    </div>
    <div class="inspector-tabs" role="tablist" aria-label="Fokus keahlian">
      <button
        v-for="(pillar, key) in pillars"
        :key="key"
        :class="['inspector-tab', `tab-${pillar.color}`, { 'is-active': activeTab === key }]"
        type="button"
        role="tab"
        :aria-selected="activeTab === key"
        :aria-controls="`pillar-panel-${key}`"
        @click="activeTab = key"
      >
        {{ key }}
      </button>
    </div>
    <article
      :id="`pillar-panel-${activeTab}`"
      :key="activeTab"
      :class="['inspector-card', `panel-${pillars[activeTab].color}`]"
      role="tabpanel"
      :aria-label="pillars[activeTab].title"
      tabindex="0"
    >
      <div class="panel-inner">
        <p class="micro-label">{{ pillars[activeTab].eyebrow }}</p>
        <h2>{{ pillars[activeTab].title }}</h2>
        <p class="inspector-description">{{ pillars[activeTab].description }}</p>
        <ul class="stack-list" aria-label="Teknologi dan area">
          <li v-for="item in pillars[activeTab].stack" :key="item">{{ item }}</li>
        </ul>
      </div>
      <span class="panel-index" aria-hidden="true">{{ activeTab === "frontend" ? "01" : activeTab === "fullstack" ? "02" : "03" }}</span>
    </article>
    <p class="inspector-hint"><span aria-hidden="true">↳</span> PILIH PILAR UNTUK MELIHAT DETAIL</p>
  </section>
</template>
