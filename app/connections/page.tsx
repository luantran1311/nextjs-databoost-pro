import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import ConnectionCard from "@/components/ConnectionCard";
import { connections } from "@/dummy_data/connections";

const Connections = () => {
  return (
    <div className="connections">
      <div className="heading flex justify-between">
        <h3 className="text-3xl font-bold text-red-600">Connections</h3>
        <button className="inline-flex items-center py-1 px-2 rounded-md hover:text-white hover:bg-black">
          <PlusCircleIcon className="w-8 h-8 mr-1" />
          Add New
        </button>
      </div>
      <div className="content mt-8">
        {connections.length === 0 && <p>No connections found.</p>}
        {connections.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {connections?.map((connection: any, index: number) => (
              <div key={index}>
                <ConnectionCard id={connection.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Connections;
