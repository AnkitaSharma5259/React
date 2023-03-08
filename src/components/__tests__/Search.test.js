import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Restaurant_DATA } from "../mocks/data";

//dummy function which is given to us by jest
global.fetch = jest.fn(() => {
  //what does fetch do.
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurant_DATA);
    },
  });
});

test("search results on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  console.log(body);

  const searchBtn = body.getByTestId("search-btn");
  console.log(searchBtn);
});

test("Shimmer should load on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  console.log(body);

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});

test("Restaurants should load on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");

  console.log(resList.childrenlength).toBe(15);
});

test("search for string(food) on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  //we have something as synthetic events.
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  }); //trigerring onchange of input box.

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.chilldren.length).toBe(4);
});
