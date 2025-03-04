<script setup lang="ts">
import ClockFace from '~/assets/media/clock-face.png'
const props = defineProps({
  timezone: {
    type: String,
    required: true
  }
})
const clock = ref<HTMLDivElement>()
const hour = ref<HTMLDivElement>()
const min = ref<HTMLDivElement>()
const sec = ref<HTMLDivElement>()
onMounted(() => {
  const deg = 6
  let interval: NodeJS.Timeout | undefined = undefined

  const setClock = () => {
    const day = new Date()

    const lts = day.toLocaleTimeString('en-US', {
      timeZone: props.timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    const splittedLts = lts.split(' ')[0]?.split(':')
    const hh = parseInt(splittedLts![0] ?? '0') * 30
    const mm = parseInt(splittedLts![1] ?? '0') * deg
    const ss = parseInt(splittedLts![2] ?? '0') * deg

    try {
      hour.value!.style.transform = `rotateZ(${hh + mm / 12}deg)`
      min.value!.style.transform = `rotateZ(${mm}deg)`
      sec.value!.style.transform = `rotateZ(${ss}deg)`
    } catch (error) {
      clearTimeout(interval)
    }
  }

  // first time
  setClock()
  // Update every 1000 ms
  interval = setInterval(setClock, 1000)
})
</script>

<template>
  <div class="clock-wrapper grow-0">
    <div ref="clock" class="clock aspect-square grow-0" :style="{ backgroundImage: `url(${ClockFace})` }">
      <div class="hour" ref="hour"></div>
      <div class="min" ref="min"></div>
      <div class="sec" ref="sec"></div>
    </div>
  </div>
</template>

<style scoped>
.clock {
  min-height: 18em;
  min-width: 18em;
  max-height: 32em;
  max-width: 32em;
  margin-left: -1em;
  margin-right: -1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  transition: all ease 0.2s;
  /* scale: 0.75; */
}
.clock:before {
  content: '';
  height: 0.75rem;
  width: 0.75rem;
  @apply bg-primary-500 border-2 border-primary-500;
  position: absolute;
  border-radius: 50%;
  z-index: 1000;
  transition: all ease 0.2s;
}
.hour,
.min,
.sec {
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
.hour {
  height: 10em;
  width: 10em;
}
.hour:before {
  content: '';
  position: absolute;
  height: 50%;
  width: 6px;
  @apply bg-surface-500;
  border-radius: 6px;
}
.min {
  height: 12em;
  width: 12em;
}
.min:before {
  content: '';
  height: 50%;
  width: 4px;
  @apply bg-surface-500;
  border-radius: 4px;
}
.sec {
  height: 13em;
  width: 13em;
}
.sec:before {
  content: '';
  height: 60%;
  width: 4px;
  @apply bg-primary-500;
  border-radius: 4px;
}
.switch-cont {
  margin: 2em auto;
  bottom: 0;
}
.switch-cont .switch-btn {
  font-family: monospace;
  text-transform: uppercase;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  border: 1px solid var(--main-text-color);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all ease 0.3s;
}
</style>
