"use client";

import ProductCatalogueView from "@/components/ProductCatalogueView";
import { fetcher } from "@/lib/swrFetcher";
import React from "react";
import useSWR from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  name: string;
  platform: string;
  storeUrl: string;
  accessToken: string;
};

const ProductCataloguesAdd = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onConnectionTest = async () => {
    const storeUrl = watch("storeUrl");
    const accessToken = watch("accessToken");
    const response = await axios
      .post(
        "/api/magento/products",
        {
          storeUrl,
          accessToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res: any) => console.log("res", res));
  };

  //if (data)
  {
    return (
      <div className="product-catalogues-add">
        <div className="heading flex justify-between">
          <h3 className="text-3xl font-bold text-red-600">
            New Product Catalogue
          </h3>
        </div>
        <div className="content mt-8">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  General
                </h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <div className="col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.name && <span>This field is required</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Store Details
                </h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
                  <div className="col-span-1">
                    <label
                      htmlFor="platform"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Platform
                    </label>
                    <div className="mt-2">
                      <select
                        {...register("platform", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="" disabled selected>
                          Choose one
                        </option>
                        <option value="magento2">Magento 2</option>
                      </select>
                      {errors.platform && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="store-url"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Store URL
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("storeUrl", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="access-token"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Access Token
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        {...register("accessToken", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    onClick={onConnectionTest}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-indigo-600"
                  >
                    Test Connection
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
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
          </form>
        </div>
      </div>
    );
  }
};

export default ProductCataloguesAdd;
