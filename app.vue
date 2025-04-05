<script setup>
// import "flag-icon-css/css/flag-icons.min.css"

// useAuthStore().$hydrate({ runHooks: false })
useHead({
    title: "RNO Brava",
    link: [
        { rel: "icon", type: "image/x-icon", href: "/wearereinobrava/favicon.ico" }
    ]
})
</script>

<template>
<div class="bg-neutral-50 min-h-screen">
	<NuxtLoadingIndicator />
	<UApp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</div>
</template>
