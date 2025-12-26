document.addEventListener("DOMContentLoaded", () => {
  const animationDiv = document.getElementById("background-animation");
  const fadeInElements = document.querySelectorAll(".fade-in");

  animationDiv.style.animation = "zoomOutBlur 0.6s ease forwards";

  setTimeout(() => {
    animationDiv.classList.add("hidden");
    document.body.classList.remove("no-scroll");

    fadeInElements.forEach((element) => {
      element.classList.add("visible");
    });
  }, 650);

  const sizeButtons = document.querySelectorAll('.size-btn');
  const qtyInput = document.getElementById('quantity');
  const qtyLabel = document.querySelector('label[for="quantity"]');

  qtyInput.classList.add('quantity-animate');
  qtyLabel.classList.add('quantity-animate');

  sizeButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (!this.disabled) {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        setTimeout(() => {
          qtyLabel.classList.add('show');
          qtyInput.classList.add('show');
        }, 10);
      }
    });
  });
});



function toggleSearchBar() {
  const bar = document.getElementById('searchForm');
  bar.classList.toggle('active');
}

document.getElementById('qty-1').addEventListener('change', function () {
  const qty = this.value;
  document.querySelector('.first-item-qty').textContent = qty;
});

document.getElementById('qty-2').addEventListener('change', function () {
  const qty = this.value;
  document.querySelector('.second-item-qty').textContent = qty;
});

