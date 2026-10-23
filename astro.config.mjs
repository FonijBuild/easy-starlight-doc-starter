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
        en: "My Docs",
        fa: "مستندات من",
      },
      logo: {
        src: "./src/assets/yourlogo.svg",
        // Uncomment below line if your logo has the title inside
        // replacesTitle: true,

        // In case you have separate dark/light logo
        // light: './src/assets/light-logo.svg',
        // dark: './src/assets/dark-logo.svg',
      },
      // Set English as the default language for this site.
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
        // Persian docs in `src/content/docs/fa/`
        fa: {
          label: "فارسی",
          dir: "rtl",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
