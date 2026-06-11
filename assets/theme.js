/* Preventura theme scripts */
(function () {
  'use strict';

  /* --- Mobile navigation --------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-mobile-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var isOpen = !nav.hidden;
      nav.hidden = isOpen;
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  /* --- Product gallery ----------------------------------------------- */
  function initGallery() {
    var gallery = document.querySelector('[data-product-gallery]');
    if (!gallery) return;
    var main = gallery.querySelector('#ProductMainImage');
    var thumbs = gallery.querySelectorAll('[data-thumb]');
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var url = thumb.getAttribute('data-media-url');
        if (main && url) {
          main.src = url;
          main.srcset = '';
        }
        thumbs.forEach(function (t) { t.classList.remove('product-gallery__thumb--active'); });
        thumb.classList.add('product-gallery__thumb--active');
      });
    });
  }

  /* --- Variant selection --------------------------------------------- */
  function initVariantSelector() {
    var form = document.querySelector('[data-product-form]');
    if (!form) return;
    var select = form.querySelector('[data-variant-select]');
    var optionInputs = form.querySelectorAll('[data-option-input]');
    if (!select || !optionInputs.length) return;

    function getSelectedOptions() {
      var values = [];
      var groups = {};
      optionInputs.forEach(function (input) {
        if (input.checked) groups[input.name] = input.value;
      });
      Object.keys(groups).sort().forEach(function (k) { values.push(groups[k]); });
      return values;
    }

    optionInputs.forEach(function (input) {
      input.addEventListener('change', function () {
        var selected = getSelectedOptions().join(' / ');
        Array.prototype.forEach.call(select.options, function (opt) {
          if (opt.text.trim() === selected) select.value = opt.value;
        });
      });
    });
  }

  /* --- Quantity selector --------------------------------------------- */
  function initQuantity() {
    document.querySelectorAll('[data-qty-input]').forEach(function (input) {
      var wrapper = input.closest('.quantity-selector');
      if (!wrapper) return;
      var minus = wrapper.querySelector('[data-qty-minus]');
      var plus = wrapper.querySelector('[data-qty-plus]');
      if (minus) minus.addEventListener('click', function () {
        var v = parseInt(input.value, 10) || 1;
        if (v > 1) input.value = v - 1;
      });
      if (plus) plus.addEventListener('click', function () {
        var v = parseInt(input.value, 10) || 1;
        input.value = v + 1;
      });
    });
  }

  /* --- Add to cart (AJAX) -------------------------------------------- */
  function initAddToCart() {
    var form = document.querySelector('[data-product-form]');
    if (!form) return;
    var button = form.querySelector('[data-add-to-cart]');
    if (!button) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var original = button.querySelector('span') ? button.querySelector('span').textContent : button.textContent;
      button.setAttribute('disabled', 'disabled');

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        body: new URLSearchParams(new FormData(form))
      })
        .then(function (res) { return res.json(); })
        .then(function () { return fetch('/cart.js', { headers: { 'Accept': 'application/json' } }); })
        .then(function (res) { return res.json(); })
        .then(function (cart) {
          updateCartCount(cart.item_count);
          if (button.querySelector('span')) button.querySelector('span').textContent = '✓';
          setTimeout(function () {
            if (button.querySelector('span')) button.querySelector('span').textContent = original;
            button.removeAttribute('disabled');
          }, 1200);
        })
        .catch(function () {
          button.removeAttribute('disabled');
          form.submit();
        });
    });
  }

  function updateCartCount(count) {
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = count;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initGallery();
    initVariantSelector();
    initQuantity();
    initAddToCart();
  });
})();
