import ProductListPage from "./pages/ProductListPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import CartPage from "./pages/Cart.js";

function App({ $app }) {
  this.route = () => {
    const { pathname } = location;
    console.log(location);
    if (pathname === "/") {
      new ProductListPage({ $app }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      new ProductDetailPage({ $app }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $app }).render();
    }
  };

  this.route();
}

export default App;
