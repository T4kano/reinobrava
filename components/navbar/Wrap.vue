<script setup>
const route = useRoute()
const open = ref(false)

const items = [
	{ label: "Agenda", to: "/schedule" },
	{ label: "Essentials", to: "/essentials" },
]

watch(route, () => open.value = false)
</script>

<template>
<div>
	<UNavigationMenu :items class="hidden md:block" />

	<USlideover v-model:open="open" :close="true" :ui="{ body: 'p-0' }">
		<UButton icon="i-heroicons-bars-3" variant="ghost" class="md:hidden" size="sm" />

		<template #header>
			<a href="/" class="flex items-center font-bold gap-2">
				<img src="/assets/img/brand.png" alt="Logo Reino Brava" class="invert w-8" />
				<span>BRAVA</span>
			</a>
			<UButton color="neutral" variant="soft" size="xs" class="ms-auto" icon="i-heroicons-x-mark" @click="open = false" />
		</template>

		<template #body>
			<UNavigationMenu :items orientation="vertical" :ui="{ link: 'p-4 before:rounded-none' }" class="md:hidden" />
		</template>
	</USlideover>
</div>
</template>
