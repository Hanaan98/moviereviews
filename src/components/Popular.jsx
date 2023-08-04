import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";
function Popular(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1500]);
  }, []);
  return (
    <div className="section_padding">
      {isLoading ? (
        <Skeleton
          width={120}
          height={50}
          baseColor="#202020"
          highlightColor="#444"
        />
      ) : (
        <h1 className="text-white text-4xl font-bold">
          {props.text && props.text.replace("_", " ").toUpperCase()}
        </h1>
      )}
      <div className="section_padding flex flex-wrap gap-2 justify-center">
        {props.movies && props.movies.map((item) => <Card movies={item} />)}
      </div>
    </div>
  );
}

export default Popular;
