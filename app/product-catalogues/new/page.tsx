"use client";

import ProductCatalogueView from "@/components/ProductCatalogueView";
import React from "react";

const ProductCataloguesAdd = () => {
  const onFormSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="product-catalogues-add">
      <div className="heading flex justify-between">
        <h3 className="text-3xl font-bold text-red-600">
          Add New Product Catalogues
        </h3>
      </div>
      <div className="content mt-8">
        <form onSubmit={onFormSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                General
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      name="name"
                      type="name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Store Details
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Platform
                  </label>
                  <div className="mt-2">
                    <select
                      id="platform"
                      name="platform"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="" selected>
                        Choose one
                      </option>
                      <option value="magento2">Magento 2</option>
                      <option value="shopify">Shopify</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="store-url"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Store URL
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="store-url"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="http-username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    HTTP Username (optional)
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="http-username"
                      id="http-username"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="http-password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    HTTP Password (optional)
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="http-password"
                      id="http-password"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="store-url"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Access Token
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="access-token"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
        <div className="product-catalogues-view">
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Product Catalogues Preview
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <ProductCatalogueView />

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCataloguesAdd;