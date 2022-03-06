function ProductDetailPage({ $app }) {
  const $page = document.createElement("div");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h1>상품상세</h1>";
  this.render = () => {
    $app.appendChild($page);
  };
}

export default ProductDetailPage;
