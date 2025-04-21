<script setup>
useHead({
    title: "RNO Brava",
    link: [
        { rel: "icon", type: "image/x-icon", href: "/reinobrava/favicon.ico" }
    ]
})
</script>

<template>
<div class="min-h-screen">
	<NuxtLoadingIndicator />
	<UApp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</div>
</template>
