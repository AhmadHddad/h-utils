export const scrollToElement = (
  selectorOrId: string,
  { yOffset = 0, timeOutValue = 0, isId = false }
) => {
  setTimeout(() => {
    if (selectorOrId === '#') return;

    const element = isId
      ? document.getElementById(selectorOrId)
      : document.querySelector(selectorOrId);

    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, timeOutValue);
};
