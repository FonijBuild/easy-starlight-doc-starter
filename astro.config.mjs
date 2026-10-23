// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://fonijbuild.github.io/easy-starlight-docs-starter",
  integrations: [
    starlight({
      title: "My Docs",
      logo: {
        src: "./src/assets/yourlogo.svg",
        // if your logo has the title, uncomment below line
        // replacesTitle: true,

        // if you have separate dark/light logo
        // light: './src/assets/light-logo.svg',
        // dark: './src/assets/dark-logo.svg',
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
