var sideNavMenu = document.getElementById("side-navbar-activate");
var sidenavbar = document.querySelector(".side-navbar");
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px";
});
document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%";
});

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const products = document.querySelectorAll('.product');
    const searchBar = document.getElementById('search-bar');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    searchBar.addEventListener('input', filterProducts);

    function filterProducts() {
        const filters = {
            occasion: [],
            colors: [],
            arrivals: []
        };

        const searchText = searchBar.value.toLowerCase();

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                filters[checkbox.dataset.filter].push(checkbox.value);
            }
        });

        products.forEach(product => {
            const occasion = product.dataset.occasion;
            const colors = product.dataset.colors;
            const arrivals = product.dataset.arrivals;
            const productName = product.dataset.name.toLowerCase();

            const isOccasionMatch = filters.occasion.length === 0 || filters.occasion.includes(occasion);
            const isColorsMatch = filters.colors.length === 0 || filters.colors.includes(colors);
            const isArrivalsMatch = filters.arrivals.length === 0 || filters.arrivals.includes(arrivals);
            const isSearchMatch = productName.includes(searchText);

            if (isOccasionMatch && isColorsMatch && isArrivalsMatch && isSearchMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});