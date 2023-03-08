import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"; //This router can work withou browser.

test("Logo should load on rendering header", () => {
  //Load Header
  //Check if logo is loaded.
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  //check if logo is loaded
  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart- 0 items");
});
