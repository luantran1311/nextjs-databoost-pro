import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
//fetch products from Magento 2
export async function POST(request: NextRequest) {
  const { storeUrl, accessToken } = await request.json();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const response = await axios.get(
      `${storeUrl}/rest/default/V1/products/?searchCriteria[PageSize]=1&fields=items[sku,name,price,qty,media_gallery_entries],total_count`,
      {
        headers,
      }
    );
    const data = response.data;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    const { status, statusText } = error;
    return NextResponse.json({ error: status, message: statusText }, { status: status });
  }
  // return NextResponse.json({ message: "ok" }, { status: 200 });
}
