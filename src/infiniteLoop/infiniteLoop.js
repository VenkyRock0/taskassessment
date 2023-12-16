import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  border: "2px solid #0d75f8",
  margin: 12,
  padding: 8,
};

function InfiniteScrolling() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  function fetchMoreData() {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: 20 })));
    }, 1000);
  }

  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
    >
      {dataSource.map((item, index) => {
        return (
          <div style={style}>
            This is a row #{index + 1} inside infinite scroll
          </div>
        );
      })}
    </InfiniteScroll>
  );
}

export default InfiniteScrolling;
