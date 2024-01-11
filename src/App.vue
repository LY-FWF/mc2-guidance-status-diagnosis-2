<script setup>
	import { ref, inject } from 'vue'
	import api from './api'

	const response = await api.get('/api/user')
	const result = await api.post('/api/user', {
		username: 'username',
		password: 'password',
	})

	const worker = inject('worker')
</script>

<template>
	<div></div>
</template>

<style scoped></style>
