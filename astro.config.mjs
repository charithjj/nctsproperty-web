// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	// IMPORTANT: Do NOT publish the site until the owner confirms the
	// exact production hostname (https://nctsproperty.com.au vs https://www.nctsproperty.com.au).
	// This value controls canonical URLs and sitemap output and must be
	// updated before going live.
	site: "https://example.com",
	integrations: [sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
