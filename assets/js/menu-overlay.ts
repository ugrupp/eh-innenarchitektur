export {};

declare global {
  interface Window {
    menuOverlay: () => {
      show: boolean;
      open: () => void;
      close: () => void;
      isOpen: () => boolean;
    };
  }
}

window.menuOverlay = () => ({
  show: false,
  open() {
    this.show = true;
  },
  close() {
    this.show = false;
  },
  toggle() {
    this.isOpen() ? this.close() : this.open();
  },
  isOpen() {
    return this.show === true;
  },
});
