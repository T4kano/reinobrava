// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@pinia/nuxt'],
	app: { baseURL: "/wearereinobrava/" },
	css: ["~/assets/css/main.css"],
	devtools: { enabled: true },
	ssr: false,

	compatibilityDate: '2024-11-01',
})