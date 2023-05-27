import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'

export default defineConfig({
	integrations: [svelte()],
	site: 'https://skillsplus.github.io',
        base: '/dashboard',
	// base: '/astro',
})
