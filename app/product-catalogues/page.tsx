"use client";

import ProductCatalogueListView from "@/components/ProductCatalogueListView";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ProductCatalogues = () => {
  return (
    <div className="product-catalogues">
      <div className="heading flex justify-between">
        <h3 className="text-3xl font-bold text-red-600">Product Catalogues</h3>
        <Link
          href="/product-catalogues/new"
          className="inline-flex items-center py-1 px-2 rounded-md hover:bg-slate-100"
        >
          <PlusCircleIcon className="w-8 h-8 mr-1" />
          Add New
        </Link>
      </div>
      <div className="content mt-8">
      <div className="col-span-full">
                  {/* <ProductCatalogueView /> */}
                  <ProductCatalogueListView />
                </div>
      </div>
    </div>
  );
};

export default ProductCatalogues;
