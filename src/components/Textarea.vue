<template>
  <b-form-group
      :label="label"
      :label-for="textareaId"
  >
    <b-form-textarea
        :id="textareaId"
        ref="textarea"
        :value="value"
        @input="$emit('input', $event)"
        :placeholder="placeholder"
        :rows="rows"
    />
    <b-button-group>
      <b-button :id="copyButtonId" variant="primary" @click="copy">Copy</b-button>
      <b-button variant="secondary" @click="clear">Clear</b-button>
      <b-tooltip
          :target="copyButtonId"
          :variant="tooltipVariant"
          placement="bottom"
          boundary-padding="0"
          :show="tooltipText !== null"
          triggers="manual">
        {{tooltipText}}
      </b-tooltip>
    </b-button-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    label: String,
    value: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 25
    },
  },
  data() {
    return {
      textareaId: this.$uuid.v4(),
      copyButtonId: this.$uuid.v4(),
      tooltipVariant: null,
      tooltipText: null,
    }
  },
  methods: {
    copy() {
      let showTooltip = (isSuccessful, payload) => {
        if (isSuccessful) {
          console.debug('copied:', payload)
        } else {
          console.error('failed to copy:', payload)
        }
        this.tooltipVariant = isSuccessful ? 'success' : 'danger'
        this.tooltipText = isSuccessful ? 'Copied' : 'Copy failed'
        if (this.timeoutId) {
          clearTimeout(this.timeoutId)
        }
        this.timeoutId = setTimeout(() => {
          this.tooltipText = null
        }, 2000)
      }

      let value = this.value
      if (!value) {
        showTooltip(false, 'Nothing to copy')
        return
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value)
            .then(() => {
              showTooltip(true, value)
            }, (err) => {
              showTooltip(false, err)
            });
      } else {
        this.$refs.textarea.select()
        let isSuccessful = document.execCommand('copy')
        showTooltip(isSuccessful)
      }
    },
    clear() {
      this.$emit('input', null)
    },
  }
}
</script>

<style scoped>
</style>
