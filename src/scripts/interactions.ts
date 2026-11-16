function setupProjectFilters() {
  document.querySelectorAll<HTMLElement>("[data-project-browser]").forEach((browser) => {
    if (browser.dataset.ready === "true") return;
    browser.dataset.ready = "true";

    const buttons = Array.from(browser.querySelectorAll<HTMLButtonElement>("[data-project-filter]"));
    const cards = Array.from(browser.querySelectorAll<HTMLElement>("[data-project-card]"));
    const count = browser.querySelector<HTMLElement>("[data-project-count]");
    const empty = browser.querySelector<HTMLElement>("[data-project-empty]");
    const dialog = browser.parentElement?.querySelector<HTMLDialogElement>("[data-project-preview-dialog]");
    const frame = dialog?.querySelector<HTMLIFrameElement>("[data-project-preview-frame]");
    const title = dialog?.querySelector<HTMLElement>("[data-project-preview-title]");
    const status = dialog?.querySelector<HTMLElement>("[data-project-preview-status]");
    const closeButton = dialog?.querySelector<HTMLButtonElement>("[data-project-preview-close]");
    const externalLink = dialog?.querySelector<HTMLAnchorElement>("[data-project-preview-external]");

    if (dialog && frame && title && status && closeButton && externalLink) {
      browser.querySelectorAll<HTMLButtonElement>("[data-project-preview-url]").forEach((button) => {
        button.addEventListener("click", () => {
          const url = button.dataset.projectPreviewUrl;
          if (!url) return;

          const language = document.documentElement.lang;
          const projectTitle =
            language === "ja"
              ? button.dataset.projectPreviewTitleJa ?? button.dataset.projectPreviewTitle ?? "アプリのプレビュー"
              : language === "en"
                ? button.dataset.projectPreviewTitleEn ?? button.dataset.projectPreviewTitle ?? "App preview"
                : button.dataset.projectPreviewTitle ?? "Preview aplikasi";
          title.textContent = projectTitle;
          frame.title =
            language === "ja"
              ? `アプリのプレビュー: ${projectTitle}`
              : language === "en"
                ? `App preview: ${projectTitle}`
                : `Preview aplikasi: ${projectTitle}`;
          frame.src = url;
          externalLink.href = url;
          externalLink.hidden = false;
          status.textContent = language === "ja" ? "アプリを読み込み中…" : language === "en" ? "Loading app…" : "Memuat aplikasi…";
          dialog.showModal();
        });
      });

      frame.addEventListener("load", () => {
        if (frame.src !== "about:blank") {
          status.textContent =
            document.documentElement.lang === "ja"
              ? "プレビューを読み込みました。このエリアでアプリを操作できます。"
              : document.documentElement.lang === "en"
                ? "Preview loaded. Try the app in this area."
                : "Preview dimuat. Coba operasikan aplikasi di area ini.";
        }
      });

      closeButton.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener("close", () => {
        frame.src = "about:blank";
        externalLink.hidden = true;
        status.textContent = "";
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.projectFilter ?? "Semua";
        const visibleCount = cards.reduce((total, card) => {
          const visible = filter === "Semua" || card.dataset.category === filter;
          card.hidden = !visible;
          return total + Number(visible);
        }, 0);

        buttons.forEach((item) => {
          const selected = item === button;
          item.classList.toggle("is-selected", selected);
          item.setAttribute("aria-pressed", String(selected));
        });

        if (count) {
          const language = document.documentElement.lang;
          count.textContent =
            language === "ja"
              ? `${visibleCount}件のプロジェクトを表示`
              : language === "en"
                ? `${visibleCount} ${visibleCount === 1 ? "project" : "projects"} shown`
                : `${visibleCount} proyek ditampilkan`;
        }
        if (empty) empty.hidden = visibleCount > 0;
      });
    });
  });
}

function setupHeroInspector() {
  document.querySelectorAll<HTMLElement>("[data-inspector]").forEach((inspector) => {
    if (inspector.dataset.ready === "true") return;
    inspector.dataset.ready = "true";

    const tabs = Array.from(inspector.querySelectorAll<HTMLButtonElement>("[data-inspector-tab]"));
    const panels = Array.from(inspector.querySelectorAll<HTMLElement>("[data-inspector-panel]"));

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const activeId = tab.dataset.inspectorTab;

        tabs.forEach((item) => {
          const selected = item === tab;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-selected", String(selected));
        });

        panels.forEach((panel) => {
          panel.hidden = panel.dataset.inspectorPanel !== activeId;
        });
      });
    });
  });
}

function setupCvPreview() {
  const dialog = document.querySelector<HTMLDialogElement>("[data-cv-dialog]");
  const closeButton = dialog?.querySelector<HTMLButtonElement>("[data-cv-dialog-close]");
  const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-cv-preview-open]"));
  const previewImages = Array.from(dialog?.querySelectorAll<HTMLImageElement>("[data-cv-preview-image]") ?? []);

  if (!dialog || !closeButton || triggers.length === 0 || previewImages.length === 0 || dialog.dataset.ready === "true") return;
  dialog.dataset.ready = "true";
  const closePreview = () => {
    previewImages.forEach((image) => image.removeAttribute("src"));
    dialog.close();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const sources = previewImages.map((image) => {
        const source = image.dataset.src;
        return source ? { image, source } : undefined;
      });

      if (sources.some((item) => !item)) {
        console.error("A CV preview image source is missing.");
        return;
      }

      sources.forEach((item) => {
        if (!item) return;
        item.image.loading = "eager";
        item.image.src = item.source;
      });
      dialog.showModal();
    });
  });
  closeButton.addEventListener("click", closePreview);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closePreview();
  });
  dialog.addEventListener("cancel", () => {
    previewImages.forEach((image) => image.removeAttribute("src"));
  });
}

function setupCopyEmail() {
  document.querySelectorAll<HTMLElement>("[data-copy-email]").forEach((container) => {
    const button = container.querySelector<HTMLButtonElement>("[data-copy-button]");
    if (!button || button.dataset.ready === "true") return;
    button.dataset.ready = "true";

    const error = container.querySelector<HTMLElement>("[data-copy-error]");
    const status = container.querySelector<HTMLElement>("[data-copy-status]");
    let resetTimer: number | undefined;

    button.addEventListener("click", async () => {
      const email = button.dataset.copyText;
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        if (resetTimer) window.clearTimeout(resetTimer);
        const language = document.documentElement.lang;
        button.textContent = language === "ja" ? "コピーしました" : language === "en" ? "COPIED!" : "TERSALIN!";
        if (error) error.hidden = true;
        if (status) status.textContent =
          language === "ja" ? "メールアドレスをコピーしました。" : language === "en" ? "Email address copied." : "Alamat email tersalin.";
        resetTimer = window.setTimeout(() => {
          button.textContent = language === "ja" ? "コピー" : language === "en" ? "COPY" : "SALIN";
          if (status) status.textContent = "";
        }, 2000);
      } catch {
        if (error) {
          const language = document.documentElement.lang;
          error.textContent =
            language === "ja"
              ? "自動コピーを利用できません。メールアドレスを選択してください。"
              : language === "en"
                ? "Automatic copying is unavailable. Please select the email address."
                : "Salin otomatis tidak tersedia. Silakan pilih alamat email.";
          error.hidden = false;
        }
        if (status) status.textContent = "";
      }
    });
  });
}

function setupImagePreview() {
  const dialog = document.querySelector<HTMLDialogElement>("[data-image-lightbox]");
  const image = dialog?.querySelector<HTMLImageElement>("[data-image-lightbox-image]");
  const caption = dialog?.querySelector<HTMLElement>("[data-image-lightbox-caption]");
  const count = dialog?.querySelector<HTMLElement>("[data-image-lightbox-count]");
  const closeButton = dialog?.querySelector<HTMLButtonElement>("[data-image-lightbox-close]");
  const previousButton = dialog?.querySelector<HTMLButtonElement>("[data-image-lightbox-previous]");
  const nextButton = dialog?.querySelector<HTMLButtonElement>("[data-image-lightbox-next]");

  if (
    !dialog ||
    !image ||
    !caption ||
    !count ||
    !closeButton ||
    !previousButton ||
    !nextButton ||
    dialog.dataset.ready === "true"
  ) return;
  dialog.dataset.ready = "true";
  let previewImages: { src: string; alt: string }[] = [];
  let activeImageIndex = 0;

  const showImage = (index: number) => {
    activeImageIndex = (index + previewImages.length) % previewImages.length;
    const activeImage = previewImages[activeImageIndex];
    image.src = activeImage.src;
    image.alt = activeImage.alt;
    caption.textContent = activeImage.alt;
    count.textContent = `${activeImageIndex + 1} / ${previewImages.length}`;
    previousButton.hidden = previewImages.length < 2;
    nextButton.hidden = previewImages.length < 2;
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const trigger = target.closest<HTMLButtonElement>("[data-image-preview]");
    if (!trigger) return;

    const src = trigger.dataset.imagePreviewSrc;
    const alt = trigger.dataset.imagePreviewAlt;
    if (!src || !alt) return;

    const container = trigger.closest<HTMLElement>("[data-project-card], .case-study-gallery");
    const imageSet = container?.querySelector<HTMLTemplateElement>("template[data-image-preview-set]");
    if (!imageSet) {
      console.error("Image preview set is missing for the selected screenshot.");
      return;
    }

    previewImages = Array.from(imageSet.content.querySelectorAll<HTMLImageElement>("img")).map((item) => {
      const language = document.documentElement.lang;
      return {
        src: item.getAttribute("src") ?? "",
        alt:
          language === "ja"
            ? item.dataset.altJa ?? item.alt
            : language === "en"
              ? item.dataset.altEn ?? item.alt
              : item.alt,
      };
    });
    if (previewImages.length === 0 || previewImages.some((item) => !item.src || !item.alt)) {
      console.error("Image preview set contains missing screenshot data.");
      return;
    }

    const selectedIndex = Number(trigger.dataset.imagePreviewIndex);
    if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= previewImages.length) {
      console.error("Selected screenshot index is outside the available preview set.");
      return;
    }

    showImage(selectedIndex);
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => dialog.close());
  previousButton.addEventListener("click", () => showImage(activeImageIndex - 1));
  nextButton.addEventListener("click", () => showImage(activeImageIndex + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && previewImages.length > 1) {
      event.preventDefault();
      showImage(activeImageIndex - 1);
    } else if (event.key === "ArrowRight" && previewImages.length > 1) {
      event.preventDefault();
      showImage(activeImageIndex + 1);
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    image.src = "";
    image.alt = "";
    caption.textContent = "SCREENSHOT PREVIEW";
    count.textContent = "";
    previewImages = [];
    activeImageIndex = 0;
    previousButton.hidden = false;
    nextButton.hidden = false;
  });
}

function setupInteractions() {
  setupProjectFilters();
  setupHeroInspector();
  setupCvPreview();
  setupCopyEmail();
  setupImagePreview();
}

document.addEventListener("astro:page-load", setupInteractions);
setupInteractions();
