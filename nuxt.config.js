// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@pinia/nuxt"],
	css: ["~/assets/css/main.css"],
	devtools: { enabled: true },
	ssr: false,

	app: {
		buildAssetsDir: "/assets/",
		baseURL: "/reinobrava/",
	},

	compatibilityDate: "2024-11-01",
});
