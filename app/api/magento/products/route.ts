import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const getProductQty = async (
  sku: string,
  storeUrl: string,
  accessToken: string
) => {
  let stock = "N/A";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const response = await axios.get(
      `${storeUrl}/rest/default/V1/stockItems/${sku}`,
      {
        headers,
      }
    );
    stock = response.data.qty.toString();

    // return NextResponse.json({ items, total_count}, { status: 200 });
  } catch (error: any) {
    const { status, statusText } = error;
    // return NextResponse.json({ error: status, message: statusText }, { status: status });
    //return stock;
  }
  return stock;
};

const getProductImage = async (
  sku: string,
  storeUrl: string,
  accessToken: string
) => {
  let imageUrl = "N/A";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const response = await axios.get(
      `${storeUrl}/rest/default/V1/products/${sku}/media`,
      {
        headers,
      }
    );
    const images = response.data.filter(
      (image: any) => image.disabled === false && image.media_type === "image"
    );
    imageUrl = `${storeUrl}/media/catalog/product/${images[0].file}`;
    // return NextResponse.json({ items, total_count}, { status: 200 });
  } catch (error: any) {
    const { status, statusText } = error;
    // return NextResponse.json({ error: status, message: statusText }, { status: status });
    //return stock;
  }
  return imageUrl;
};

const getProducts = async(items : any,storeUrl: string,accessToken: string) => {
  return Promise.all(items.map((item : any) => (
      Promise.all([
        getProductQty(item.sku, storeUrl, accessToken),
        getProductImage(item.sku, storeUrl, accessToken),
      ])
      .then((values: any) => {
        return {
          id: item.id,
          image: values[1],
          sku: item.sku,
          name: item.name,
          price: item.price,
          qty: values[0],
          shopifyCategory: "N/A",
          eBayCategory: "N/A",
          amazonCategory: "N/A"
        }
      })

  )))
}

//fetch products from Magento 2
export async function POST(request: NextRequest) {
  const { storeUrl, accessToken } = await request.json();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const response = await axios.get(
      `${storeUrl}/rest/default/V1/products/?searchCriteria[PageSize]=20&searchCriteria[currentPage]=1&fields=items[id,sku,name,price],total_count`,
      {
        headers,
      }
    );
    const { items, total_count } = response.data;
    const products = await getProducts(items,storeUrl,accessToken);
    console.log('products', products)


      //   {
      //     images: await getProductImage(item.sku, storeUrl, accessToken),
      //     sku: item.sku,
      //     name: item.name,
      //     price: item.price,
      //     qty: await getProductQty(item.sku, storeUrl, accessToken),
      //   }
      // ));
      // console.log(getProductQty(item.sku, storeUrl, accessToken));
      // console.log(getProductImage(item.sku, storeUrl, accessToken));

    //console.log('returnedItems',returnedItems);
    return NextResponse.json({ items: products, total_count }, { status: 200 });
  } catch (error: any) {
    const { status, statusText } = error;
    return NextResponse.json(
      { error: status, message: statusText },
      { status: status }
    );
  }
  // return NextResponse.json({ message: "ok" }, { status: 200 });
}
