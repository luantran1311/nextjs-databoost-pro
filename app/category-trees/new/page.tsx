"use client";

import { CategoryTree } from "@/types";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Papa from "papaparse";
import React, { useCallback, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { useCSVReader } from "react-papaparse";

const CategoryTreeAdd = () => {
    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    const handleParse = (fileToProcess : any) => {

            Papa.parse( fileToProcess, {
                complete: function(results, file) {
                    // 0: (3) ['Parent Category ID', 'Category ID', 'Category Name']
                    // 1: (3) ['', '1', 'Mobile Phones']
                    console.log("Parsing complete:", results.data, file);
                    handleConvert(results.data);
                }
            });
    };

    const handleConvert = (treeArr : any[]) => {
        const processedTreeArr : CategoryTree[] = treeArr.map((tree:any) => {
            return { id: tree[1], name: tree[2]}
        })
        console.log(processedTreeArr)
    }

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
                                Category Tree Upload
                            </label>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Download sample file{" "}
                                <a href="#" className="text-blue-600 underline">
                                    here
                                </a>
                            </p>
                            <Dropzone
                                onDrop={(acceptedFiles: any[]) => {
                                    console.log('file',acceptedFiles[0])
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
                                            onChange={() =>
                                                console.log("file changed")
                                            }
                                            {...getInputProps()}
                                        />

                                        <div className="text-center">
                                            <DocumentIcon className="w-12 h-12" />
                                            {isDragActive ? (
                                                <>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                            <span>
                                                                Drag it here
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">
                                                        CSV or Excel file
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryTreeAdd;