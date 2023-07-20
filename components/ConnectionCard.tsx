import React from "react";
import { connections } from "@/dummy_data/connections";
import { TrashIcon } from "@heroicons/react/24/solid";

const ConnectionCard = (props: any) => {
  const { id } = props;
  const connection = connections.find((el) => el.id === id);
  if (!connection) return <p>Error</p>;
  return <div className="border-2 rounded-lg p-4 relative h-[120px] hover:border-black">
    <a href="#">{connection.name}</a>

        <button className="absolute bottom-2 right-2 hover:text-red-600">
            <TrashIcon className="w-5 h-5" />
            <span className="hidden">Delete</span>
        </button>

    </div>;
};

export default ConnectionCard;
