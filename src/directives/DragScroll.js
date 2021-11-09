export default {
  mounted(element) {
    let init = 0;

    element.addEventListener("mousedown", (e) => {
      init = e.offsetX;
    });

    element.addEventListener("mouseup", (e) => {
      const distance = init - e.offsetX

      if (Math.abs(distance) > 50) {
        const event = new CustomEvent("dragfinish", {
          detail: {
            distance,
          },
        });
        element.dispatchEvent(event);
      }
    });
  },
};
