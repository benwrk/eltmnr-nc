<script setup lang="ts">
const subject = ref<string>('')
const message = ref<string>('')

const router = useRouter()

async function submit() {
  var target = `mailto:${encodeURIComponent('sales@eltmnr.com')}?subject=${encodeURIComponent(
    subject.value
  )}&body=${encodeURIComponent(message.value)}`
  window.open(target, '_blank')
}
</script>
<template>
  <form @submit="submit" class="max-w-[48rem]">
    <div class="flex flex-col gap-2 fade-in">
      <label for="subject">Subject</label>
      <InputText id="subject" v-model="subject" aria-describedby="subject-help" />
    </div>
    <div class="flex flex-col gap-2 mt-4 fade-in">
      <label for="message">Message</label>
      <InputText id="message" v-model="message" aria-describedby="message-help" />
      <Message size="small" severity="secondary" variant="simple" class="mt-4"> <slot /></Message>
    </div>
    <Button
      type="submit"
      icon="pi pi-send"
      size="large"
      label="Submit"
      iconPos="right"
      class="fade-in"
    />
  </form>
</template>
