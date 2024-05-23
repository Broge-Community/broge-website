<template>
  <div>
    <span>{{ formattedDisplayValue }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';

export default defineComponent({
  props: {
    startValue: {
      type: Number,
      default: 0
    },
    targetValue: {
      type: Number,
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
    const displayValue = ref(props.startValue);

    onMounted(() => {
      const range = Math.abs(props.targetValue - props.startValue);
      const increment = range / (props.duration / 16);
      let currentValue = props.startValue;

      const timer = setInterval(() => {
        if (props.startValue < props.targetValue) {
          if (currentValue < props.targetValue) {
            const randomIncrement = Math.random() * increment;
            currentValue += randomIncrement;
            displayValue.value = Math.min(currentValue, props.targetValue);
          } else {
            displayValue.value = props.targetValue;
            clearInterval(timer);
          }
        } else {
          if (currentValue > props.targetValue) {
            const randomDecrement = Math.random() * increment;
            currentValue -= randomDecrement;
            displayValue.value = Math.max(currentValue, props.targetValue);
          } else {
            displayValue.value = props.targetValue;
            clearInterval(timer);
          }
        }
      }, 16);
    });

    const formattedDisplayValue = computed(() => {
      const value = displayValue.value;
      const formattedValue = value.toLocaleString('en-US', {
        maximumFractionDigits: 0
      });
      return `${formattedValue}${props.suffix}`;
    });

    return {
      formattedDisplayValue
    };
  }
});
</script>
