<script setup>
definePageMeta({ colorMode: "light" })

const schedule = [
	{ id: 1, name: 'Unplug', date: '2023-10-01', img: 'https://t4kano.github.io/reinobrava/photo_01.jpg' },
	{ id: 2, name: 'Essentials', date: '2023-10-15', img: 'https://t4kano.github.io/reinobrava/photo_02.jpg' },
	{ id: 3, name: 'DNA', date: '2023-10-20', img: 'https://t4kano.github.io/reinobrava/photo_03.jpg' },
]
</script>

<template>
<div>
	<ScheduleHero class="mb-10" />

	<UContainer class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
		<ScheduleCard v-for="event in schedule" :key="event.id" :event />
	</UContainer>
</div>
</template>
