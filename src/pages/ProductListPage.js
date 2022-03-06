import { request } from "../utils/api.js";

function ProductListPage({ $app }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품목록</h1>";
  this.render = async () => {
    const data = await request();
    console.log(data);
    $app.appendChild($page);
  };
}

export default ProductListPage;
