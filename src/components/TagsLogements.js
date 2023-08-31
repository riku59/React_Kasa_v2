import React from "react";
import logements from "../logements.json";
import { useParams } from "react-router-dom";

const TagsLogements = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return (
          <div className="tag" key={index}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default TagsLogements;
