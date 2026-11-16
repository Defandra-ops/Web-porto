<script setup lang="ts">
import { ref } from "vue";

withDefaults(defineProps<{ email?: string }>(), {
  email: "defandrarifky@gmail.com",
});

const copied = ref(false);
const copyError = ref("");
let resetTimer: ReturnType<typeof setTimeout> | undefined;

async function copyEmail(email: string) {
  try {
    await navigator.clipboard.writeText(email);
    if (resetTimer) clearTimeout(resetTimer);
    copied.value = true;
    copyError.value = "";
    resetTimer = setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    copied.value = false;
    copyError.value = "Salin otomatis tidak tersedia. Silakan pilih alamat email.";
  }
}
</script>

<template>
  <div class="copy-email">
    <a
      class="email-value"
      :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ email }}
    </a>
    <button
      class="brutal-btn copy-button"
      type="button"
      :aria-label="copied ? 'Alamat email tersalin' : 'Salin alamat email'"
      @click="copyEmail(email)"
    >
      {{ copied ? "TERSALIN!" : "SALIN" }}
    </button>
    <p v-if="copyError" class="copy-error" role="status">{{ copyError }}</p>
    <span class="sr-only" role="status" aria-live="polite">
      {{ copied ? "Alamat email tersalin." : "" }}
    </span>
  </div>
</template>
