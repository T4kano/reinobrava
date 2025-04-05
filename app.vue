<script setup>
// import "flag-icon-css/css/flag-icons.min.css"

// useAuthStore().$hydrate({ runHooks: false })
useHead({
    title: "RNO Brava",
    link: [
        { rel: "icon", type: "image/x-icon", href: "/sapi4/client/favicon.ico" }
    ]
})
</script>

<template>
<div class="bg-neutral-50 dark:bg-[#0d1321] min-h-screen">
	<NuxtLoadingIndicator />
	<UApp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</div>
</template>
