import "lazysizes";

// Add and remove specified classes on lazyloaded event
document.addEventListener("lazyloaded", function (e) {
  const img = e.target as HTMLImageElement;
  if (img.dataset.lazyloaded) {
    const lazyloadedCfg = JSON.parse(img.dataset.lazyloaded);

    lazyloadedCfg.add && img.classList.add(...lazyloadedCfg.add.split(" "));
    lazyloadedCfg.rm && img.classList.remove(...lazyloadedCfg.rm.split(" "));
  }
});
