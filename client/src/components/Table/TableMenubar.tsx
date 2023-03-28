import React, { useState } from "react";

import { HiOutlineRefresh } from "react-icons/hi";
import { AiTwotoneEdit, AiOutlineCheck } from "react-icons/ai";
import clsxm from "../../utils/clsxm";

type Props = {
  name: string;
};

const TableMenubar = ({ name }: Props) => {
  const [tableName, setTableName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const [refreshButtonRotate, setRefreshButtonRotate] = useState(false);

  const handleClick = () => {
    setRefreshButtonRotate(true);
  };

  return (
    <div className="flex gap-2 items-center">
      {isEditing ? (
        <>
          <input
            className="text-2xl font-bold border-2 rounded"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
          />
          <AiOutlineCheck
            className="cursor-pointer"
            size={20}
            onClick={() => setIsEditing(false)}
          />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold border-2 border-white">
            {tableName}
          </h2>
          <AiTwotoneEdit
            className="cursor-pointer"
            size={20}
            onClick={() => setIsEditing(true)}
          />
        </>
      )}

      <HiOutlineRefresh
        className={clsxm(
          "cursor-pointer",
          refreshButtonRotate && "animate-one-roll "
        )}
        title="Sync changes"
        size={22}
        onClick={handleClick}
        onAnimationEnd={() => setRefreshButtonRotate(false)}
      />
    </div>
  );
};

export default TableMenubar;
