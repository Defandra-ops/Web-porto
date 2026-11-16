type Language = "id" | "en" | "ja";

const languageCodes: Record<Language, string> = {
  id: "id",
  en: "en",
  ja: "ja",
};

const supportedLanguages = Object.keys(languageCodes) as Language[];
const initialContent = new WeakMap<HTMLElement, string>();
const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

function isLanguage(value: string | null): value is Language {
  return value !== null && supportedLanguages.includes(value as Language);
}

function applyLanguage(language: Language) {
  document.documentElement.lang = languageCodes[language];
  document.querySelectorAll<HTMLSelectElement>("[data-language-select]").forEach((select) => {
    select.value = language;
    select.setAttribute("aria-label", language === "ja" ? "表示言語" : language === "en" ? "Display language" : "Bahasa");
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-en], [data-i18n-ja]").forEach((element) => {
    if (!initialContent.has(element)) {
      initialContent.set(element, element.innerHTML);
    }

    if (language === "id") {
      element.innerHTML = initialContent.get(element) ?? "";
      return;
    }

    const translation = element.dataset[`i18n${capitalize(language)}`];
    if (translation === undefined) return;

    if (element.hasAttribute("data-i18n-html")) {
      element.innerHTML = translation;
    } else {
      element.textContent = translation;
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria-label-en], [data-i18n-aria-label-ja]").forEach((element) => {
    if (!element.dataset.originalAriaLabel) {
      element.dataset.originalAriaLabel = element.getAttribute("aria-label") ?? "";
    }
    element.setAttribute(
      "aria-label",
      language === "id"
        ? element.dataset.originalAriaLabel
        : element.dataset[`i18nAriaLabel${capitalize(language)}`] ?? element.dataset.originalAriaLabel,
    );
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-alt-en], [data-i18n-alt-ja]").forEach((element) => {
    if (!element.dataset.originalAlt) {
      element.dataset.originalAlt = element.getAttribute("alt") ?? "";
    }
    element.setAttribute(
      "alt",
      language === "id"
        ? element.dataset.originalAlt
        : element.dataset[`i18nAlt${capitalize(language)}`] ?? element.dataset.originalAlt,
    );
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-title-en], [data-i18n-title-ja]").forEach((element) => {
    if (!element.dataset.originalTitle) {
      element.dataset.originalTitle = element.getAttribute("title") ?? "";
    }
    element.setAttribute(
      "title",
      language === "id"
        ? element.dataset.originalTitle
        : element.dataset[`i18nTitle${capitalize(language)}`] ?? element.dataset.originalTitle,
    );
  });

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) {
    if (!description.dataset.originalContent) {
      description.dataset.originalContent = description.content;
    }
    description.content =
      language === "id"
        ? description.dataset.originalContent
        : description.dataset[`i18nContent${capitalize(language)}`] ?? description.dataset.originalContent;
  }

  document.querySelectorAll<HTMLElement>("[data-project-content]").forEach((element) => {
    if (!initialContent.has(element)) {
      initialContent.set(element, element.innerHTML);
    }
    const template = document.querySelector<HTMLTemplateElement>(`[data-project-content-template="${language}"]`);
    element.innerHTML = language === "id" ? initialContent.get(element) ?? "" : template?.innerHTML ?? initialContent.get(element) ?? "";
  });

  const projectCount = document.querySelector<HTMLElement>("[data-project-count]");
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
  if (projectCount && projectCards.length > 0) {
    const visibleCount = projectCards.filter((card) => !card.hidden).length;
    projectCount.textContent =
      language === "ja"
        ? `${visibleCount}件のプロジェクトを表示`
        : language === "en"
          ? `${visibleCount} ${visibleCount === 1 ? "project" : "projects"} shown`
          : `${visibleCount} proyek ditampilkan`;
  }
}

function setupLanguagePicker() {
  document.querySelectorAll<HTMLSelectElement>("[data-language-select]").forEach((select) => {
    if (select.dataset.ready === "true") return;
    select.dataset.ready = "true";
    select.addEventListener("change", () => {
      const selectedLanguage = select.value;
      if (!isLanguage(selectedLanguage)) return;
      try {
        localStorage.setItem("portfolio-language", selectedLanguage);
      } catch (error) {
        console.warn("Could not save the selected language.", error);
      }
      applyLanguage(selectedLanguage);
    });
  });
}

function initializeLanguage() {
  setupLanguagePicker();
  let savedLanguage: string | null = null;
  try {
    savedLanguage = localStorage.getItem("portfolio-language");
  } catch (error) {
    console.warn("Could not read the saved language.", error);
  }
  applyLanguage(isLanguage(savedLanguage) ? savedLanguage : "id");
}

document.addEventListener("astro:page-load", initializeLanguage);
initializeLanguage();
