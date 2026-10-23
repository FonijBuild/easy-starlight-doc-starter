// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://fonijbuild.github.io/easy-starlight-docs-starter",
  integrations: [
    starlight({
      // If you need to customize the title for each locale,
      // else just use: title: 'Your Title'
      title: {
        en: "Easy Docs",
        fa: "مستندات آسان",
      },
      logo: {
        src: "./src/assets/yourlogo.svg",
        // Uncomment below line if your logo has the title inside
        // replacesTitle: true,

        // In case you have separate dark/light logo
        // light: './src/assets/light-logo.svg',
        // dark: './src/assets/dark-logo.svg',
      },
      favicon: "/images/favicon.svg",
      // Set English as the default language for this site.
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fa: {
          label: "فارسی",
          lang: "fa",
          dir: "rtl",
        },
      },
      customCss: ["./src/styles/custom.css"],
      // Override default component here
      components: {
        Footer: "./src/components/starlight/Footer.astro",
        ThemeSelect: "./src/components/starlight/ThemeToggle.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/FonijBuild/easy-starlight-docs-starter",
        },
        {
          icon: "linkedin",
          label: "Linkedin",
          href: "https://www.linkedin.com/company/fonijbuild",
        },
      ],
    }),
  ],
});
