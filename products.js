// products.js

// دالة عرض المنتجات
function displayProducts(filteredProducts) {
  const productsList = document.getElementById("products-list");
  productsList.innerHTML = "";

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <button><a href="product-details.html?id=${product.id}">عرض التفاصيل</a></button>
    `;

    productsList.appendChild(productCard);
  });
}

// عرض كل المنتجات عند الفتح
displayProducts(products);

// فلترة حسب النوع
const categoryFilter = document.getElementById("category-filter");
categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  if (selectedCategory === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === selectedCategory);
    displayProducts(filtered);
  }
});
