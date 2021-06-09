export {};

declare global {
  interface Window {
    menu: () => {
      activeId: string;
      isActive: (string) => boolean;
      activate: (string) => void;
      deactivate: () => void;
    };
  }
}

window.menu = () => ({
  activeId: null,
  isActive(id) {
    return this.activeId === id;
  },
  activate(id) {
    id && (this.activeId = id);
  },
  deactivate() {
    this.activeId = null;
  },
});
