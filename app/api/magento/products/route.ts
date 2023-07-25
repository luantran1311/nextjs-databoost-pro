import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
//fetch products from Magento 2
export async function GET(request: NextRequest) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer <token>",
  };
  try {
    const response = await axios.get(
      "<domain>/rest/default/V1/products/?searchCriteria[PageSize]=1&fields=items[sku,name,price,qty,media_gallery_entries],total_count",
      {
        headers,
      }
    );
    console.log("m2 products", response.data);
    const { data } = response;
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error: any) {
    const { status, statusText } = error.response;
    console.log("error m2", status, statusText);
    return NextResponse.json({error:"test"},{ status: status });
  }
}
