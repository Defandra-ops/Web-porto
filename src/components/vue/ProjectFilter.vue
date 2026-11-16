<script setup lang="ts">
import { computed, ref } from "vue";

interface Project {
  title: string;
  excerpt: string;
  category: string;
  role: string;
  stack: string[];
  slug: string;
  example: boolean;
  repoUrl?: string;
  designUrl?: string;
  screenshots: { src: string; alt: string }[];
}

const props = defineProps<{ projects: Project[] }>();
const filters = ["Semua", "Fullstack", "Mobile", "IT Support", "UI/UX"];
const selectedFilter = ref("Semua");
const filteredProjects = computed(() =>
  selectedFilter.value === "Semua"
    ? props.projects
    : props.projects.filter((project) => project.category === selectedFilter.value),
);
</script>

<template>
  <div class="project-browser">
    <div class="project-filters" role="group" aria-label="Filter proyek berdasarkan kategori">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="['filter-button', { 'is-selected': selectedFilter === filter }]"
        type="button"
        :aria-pressed="selectedFilter === filter"
        @click="selectedFilter = filter"
      >
        {{ filter }}
        <span v-if="filter === 'Semua'" class="filter-count">{{ projects.length }}</span>
      </button>
    </div>
    <p class="sr-only" aria-live="polite">{{ filteredProjects.length }} proyek ditampilkan</p>
    <div class="project-list">
      <article
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        :class="['project-card', 'brutal-reveal', `project-card-${index % 2 === 0 ? 'coral' : 'teal'}`]"
      >
        <figure class="project-preview">
          <img
            v-if="project.screenshots.length"
            :src="project.screenshots[0].src"
            :alt="project.screenshots[0].alt"
            loading="lazy"
            decoding="async"
          />
          <div
            v-else
            class="project-preview-placeholder"
            role="img"
            :aria-label="`Screenshot ${project.title} belum ditambahkan`"
          >
            <div class="preview-toolbar"><span></span><span></span><span></span><small>PROJECT PREVIEW</small></div>
            <div class="preview-placeholder-content">
              <span class="preview-image-icon" aria-hidden="true">▧</span>
              <strong>SCREENSHOT BELUM TERSEDIA</strong>
              <small>Tambahkan capture proyek untuk preview</small>
            </div>
            <div class="preview-placeholder-footer">{{ project.category }} / {{ project.stack.slice(0, 2).join(" · ") }}</div>
          </div>
        </figure>
        <div class="project-card-number">PROJECT / {{ String(index + 1).padStart(2, "0") }}</div>
        <div class="project-card-main">
          <div class="project-title-line">
            <h3>{{ project.title }}</h3>
            <span class="project-category">{{ project.category }}</span>
          </div>
          <p class="project-role">{{ project.role }}</p>
          <p class="project-excerpt">{{ project.excerpt }}</p>
          <ul class="project-stack" aria-label="Teknologi yang digunakan">
            <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
          </ul>
        </div>
        <div class="project-actions">
          <a class="project-link" :href="`/projects/${project.slug}/`">
            <span>Lihat studi kasus</span><span aria-hidden="true">↗</span>
          </a>
          <a v-if="project.repoUrl" class="project-link project-repo-link" :href="project.repoUrl" target="_blank" rel="noreferrer">
            <span>Lihat GitHub</span><span aria-hidden="true">↗</span>
          </a>
          <a v-if="project.designUrl" class="project-link project-repo-link" :href="project.designUrl" target="_blank" rel="noreferrer">
            <span>Lihat desain</span><span aria-hidden="true">↗</span>
          </a>
        </div>
        <span v-if="project.example" class="example-stamp">CONTOH KONTEN</span>
      </article>
      <p v-if="filteredProjects.length === 0" class="empty-projects">Belum ada proyek di kategori ini.</p>
    </div>
  </div>
</template>
