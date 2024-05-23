<template>
  <div>
    <span>{{ displayText }}{{ suffix }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  props: {
    targetText: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const displayText = ref('');

    const generateRandomChar = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      return characters.charAt(Math.floor(Math.random() * characters.length));
    };

    const capitalizeWords = (text: string) => {
      return text.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    onMounted(() => {
      const targetLength = props.targetText.length;
      const initialLength = Math.max(targetLength, 10);
      const interval = props.duration / 100; // Adjust the interval for smoother animation
      let currentLength = initialLength;
      let elapsedTime = 0;

      const timer = setInterval(() => {
        elapsedTime += interval;

        if (elapsedTime >= props.duration) {
          displayText.value = props.targetText;
          clearInterval(timer);
        } else {
          const progress = elapsedTime / props.duration;
          currentLength = Math.round(initialLength - (initialLength - targetLength) * progress);

          displayText.value = capitalizeWords(
            props.targetText
              .slice(0, currentLength)
              .padEnd(currentLength, ' ')
              .split('')
              .map(() => generateRandomChar())
              .join('')
          );
        }
      }, interval);
    });

    return {
      displayText
    };
  }
});
</script>
