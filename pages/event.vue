<script setup>
// useHead({
// 	bodyAttrs: {
// 		class: 'bg-[#E5DCCC]'
// 	}
// })

definePageMeta({
	colorMode: "light",
  	layout: 'default',
  	background: 'bg-[#E5DCCC]',
	footer: 'bg-white'
})

const state = ref({
	name: "",
	email: "",
	phone: "",
})
</script>

<template>
	<UContainer class="bg-[#E5DCCC] py-10">
		<img src="/assets/img/expressao_logo.png" class="max-w-xs mx-auto mb-10 md:mb-20" />
		<div class="grid grid-cols-1 md:grid-cols-2">
			<img src="/assets/img/expressao_convidados.png" />
			<div class="bg-[#A3745F] rounded-lg py-5">
				<UContainer class="flex flex-col justify-center h-full">
					<UForm :state class="space-y-5 mb-10">
						<UFormField label="Nome" name="name" required>
							<template #label="{ label }">
								<span class="text-white">{{ label }}</span>
							</template>
							<UInput v-model="state.name" size="lg" placeholder="Nome" class="w-full" />
						</UFormField>

						<UFormField label="E-mail" name="email" required>
							<template #label="{ label }">
								<span class="text-white">{{ label }}</span>
							</template>
							<UInput v-model="state.email" size="lg" placeholder="E-mail" class="w-full" />
						</UFormField>

						<UFormField label="Telefone" name="phone" required>
							<template #label="{ label }">
								<span class="text-white">{{ label }}</span>
							</template>
							<UInput v-model="state.phone" v-mask="['(##) #####-####', '(##) ####-####']" size="lg" placeholder="Telefone" class="w-full" />
						</UFormField>

						<ButtonModerm label="Fazer Inscrição" class="w-full" />
					</UForm>
					<span class="text-[#DBCFBA]">Local: Prédio da Reino, na Av. Marginal Oeste, n. 2000, Balneário Camboriú-SC.</span>
				</UContainer>
			</div>
		</div>
	</UContainer>
</template>
