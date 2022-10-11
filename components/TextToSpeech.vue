<script>
export default {
  props: {
    // SELECTOR is defined in index.js
    selector: { type: String, default: SELECTOR },
    content: { type: String },
  },
  data() {
    return {
      isSupported: true,
      isPlaying: false,
      isPaused: false,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        // stop on route change
        speechSynthesis.cancel();
      }
    },
  },
  beforeDestroy() {
    speechSynthesis.cancel();
  },
  mounted() {
    this.isSupported = "speechSynthesis" in window;
    this.$emit("supported", this.isSupported);
    this.emit("stopped");
  },
  methods: {
    getContent() {
      if (this.content) {
        return this.content;
      }

      const selectors = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "li"];
      const contentSelectors =
        this.selector + " " + selectors.join(`,${this.selector} `);
      const contentElems = this.$root.$el.querySelectorAll(contentSelectors);
      return Array.from(contentElems)
        .map((p) => p.textContent)
        .join(". ");
    },
    toggle() {
      if (!this.isSupported) {
        return;
      }

      if (this.isPlaying && !this.isPaused) {
        speechSynthesis.pause();
        return;
      }

      if (!this.isPlaying && this.isPaused) {
        speechSynthesis.resume();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(this.getContent());
      utterance.onstart = () => {
        this.isPlaying = true;
        this.emit("playing");
      };
      utterance.onend = () => {
        this.isPlaying = false;
        this.emit("stopped");
      };
      utterance.onpause = () => {
        this.isPaused = true;
        this.isPlaying = false;
        this.emit("paused");
      };
      utterance.onresume = () => {
        this.isPaused = false;
        this.isPlaying = true;
        this.emit("resumed");
      };

      speechSynthesis.cancel(); // https://stackoverflow.com/a/58775876/3916702
      speechSynthesis.speak(utterance);
    },
    emit(state) {
      this.$emit("statechange", state);
    },
  },
  render() {
    return this.$scopedSlots.default({ toggle: this.toggle });
  },
};
</script>
