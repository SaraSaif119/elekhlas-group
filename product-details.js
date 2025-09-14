// product-details.js

// جلب id من الرابط
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// البحث عن المنتج
const product = products.find(p => p.id === productId);

// عرض التفاصيل
const container = document.getElementById("product-details");

if (product) {
  container.innerHTML = `
    <div class="product-detail-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="desc">${product.description}</p>
      <a href="products.html" class="back-btn">⬅ العودة للمنتجات</a>
    </div>
  `;
} else {
  container.innerHTML = "<p>❌ المنتج غير موجود</p>";
}
