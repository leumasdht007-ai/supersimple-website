// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// Close menu after clicking a link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });

});


// ===============================
// SEARCH
// ===============================

const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

searchToggle.addEventListener("click", () => {

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
        searchInput.focus();
    }

});


// Search products

searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    document.querySelectorAll(".product").forEach(product => {

        const productText =
            product.textContent.toLowerCase();

        if (productText.includes(searchTerm)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});


// ===============================
// PRODUCT FILTER
// ===============================

const filters =
    document.querySelectorAll(".filter");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;

        document.querySelectorAll(".product").forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

        // Clear search when filtering

        searchInput.value = "";

    });

});


// ===============================
// SHOPPING CART COUNTER
// ===============================

let cartCount = 0;

const cartNumber =
    document.getElementById("cartCount");

const cartModal =
    document.getElementById("cartModal");

const cartBtn =
    document.getElementById("cartBtn");

const closeCart =
    document.getElementById("closeCart");

const continueShopping =
    document.getElementById("continueShopping");


// For demonstration purposes,
// clicking a Shop Now button increments the counter.

document.querySelectorAll(".product-footer a")
.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;

    });

});


// Open cart

cartBtn.addEventListener("click", () => {

    cartModal.classList.add("show");

});


// Close cart

closeCart.addEventListener("click", () => {

    cartModal.classList.remove("show");

});


// Continue shopping

continueShopping.addEventListener("click", () => {

    cartModal.classList.remove("show");

});


// Close modal when clicking outside

cartModal.addEventListener("click", event => {

    if (event.target === cartModal) {

        cartModal.classList.remove("show");

    }

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();