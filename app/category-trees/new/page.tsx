"use client";

import CategoryDataGridView from "@/components/CategoryDataGridView";
import CategoryTreeView from "@/components/CategoryTreeView";
import { buildObjectFromArray } from "@/lib/utils";
import { CategoryTree } from "@/types";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Papa from "papaparse";
import React, { useCallback, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const CategoryTreeAdd = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const [processedTreeArr, setProcessedTreeArr] = useState<CategoryTree[]>([]);
  const [parentCategoryIDs, setParentCategoryIDs] = useState<number[]>([]);

  const handleParse = (fileToProcess: any) => {
    const config = {
      skipEmptyLines: true,
      complete: (results: any, file: File) => {
        // 0: (3) ['Parent Category ID', 'Category ID', 'Category Name']
        // 1: (3) ['', '1', 'Mobile Phones']
        //remove header line
        const noHeaderData = results.data.splice(1);
        const data : CategoryTree[] = buildObjectFromArray(noHeaderData);
        console.log('data',data);
        setProcessedTreeArr(data);
      },
      error: (error: any, file: File) => {
        console.log("error", error);
      },
    };

    Papa.parse(fileToProcess, config);
  };

  const [file, setFile] = useState(null);

  return (
    <div className="category-tree-add">
      <div className="heading flex justify-between">
        <h3 className="text-3xl font-bold text-red-600">
          Add A New Category Tree
        </h3>
        {/* <Link href="/category-trees/new" className="inline-flex items-center py-1 px-2 rounded-md hover:bg-slate-100">
            <PlusCircleIcon className="w-8 h-8 mr-1" />
            Add New
        </Link> */}
      </div>
      <div className="content mt-8">
        <form>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm leading-6 text-gray-900 font-bold"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="My category tree"
                  className="block w-full rounded-md border-2 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="category-tree-upload"
                className="block text-sm leading-6 text-gray-900 font-bold"
              >
                Category Upload
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Download{" "}
                <a href="#" className="text-blue-600 underline" download={true}>
                  sample import file
                </a>
              </p>
              <Dropzone
                onDrop={(acceptedFiles: any[]) => {
                  setFile(acceptedFiles[0]);
                  handleParse(acceptedFiles[0]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                    {...getRootProps()}
                  >
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      {...getInputProps()}
                    />

                    <div className="text-center">
                      <DocumentIcon className="w-12 h-12" />
                      {isDragActive ? (
                        <>
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                              <span>Drag it here</span>
                            </label>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            CSV or Excel file
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <span className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                              Upload a file
                            </span>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            CSV or Excel file
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </Dropzone>
            </div>
            <div className="col-span-full">
            {/* <CategoryDataGridView /> */}
            </div>
            {processedTreeArr && processedTreeArr.length > 0 && (
              <div className="col-span-full">
                <label
                  htmlFor="category-tree-upload"
                  className="block text-sm leading-6 text-gray-900 font-bold"
                >
                  Preview
                </label>
                <div className="preview">
                  {processedTreeArr && (
                    // <CategoryTreeView categoryTree={processedTreeArr} />
                    <CategoryDataGridView data={processedTreeArr} />
                  )}
                  {/* <CategoryDataGridView  /> */}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryTreeAdd;