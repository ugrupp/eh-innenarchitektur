export {};

declare global {
  interface Window {
    hero: () => {
      show: boolean;
      open: () => void;
      close: () => void;
      isOpen: () => boolean;
    };
  }
}

window.hero = () => ({
  show: false,
  open() {
    this.show = true;
  },
  close() {
    this.show = false;
  },
  toggle() {
    this.show = !this.show;
  },
  isOpen() {
    return this.show === true;
  },
});
