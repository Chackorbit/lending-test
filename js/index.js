document.addEventListener("DOMContentLoaded", function () {
  let currentScreenIndex = 0;
  const screens = document.querySelectorAll(".screen");

  function scrollToScreen(index) {
    if (index >= 0 && index < screens.length) {
      screens[index].scrollIntoView({ behavior: "smooth" });
      currentScreenIndex = index;
    }
  }

  // Обробник подій для миші
  document.addEventListener("wheel", function (event) {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      scrollToScreen(currentScreenIndex + 1);
    } else if (deltaY < 0) {
      scrollToScreen(currentScreenIndex - 1);
    }
  });

  // Обробник подій для тач-жестів
  let touchStartY = 0;
  document.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY;
  });

  document.addEventListener("touchend", function (event) {
    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;
    if (deltaY > 50) {
      // Визначте власний поріг для визначення тач-жесту
      scrollToScreen(currentScreenIndex - 1);
    } else if (deltaY < -50) {
      scrollToScreen(currentScreenIndex + 1);
    }
  });
});
