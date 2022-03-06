const API_END_POINT =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";
export const request = async (id) => {
  try {
    const res = await fetch(`/products`);
    if (!res.ok) {
      throw new Error("http error");
    }
    console.log(res);
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
};
