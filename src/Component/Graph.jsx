import axios from 'axios';
import '../CSS files/Graph.css'
import React, { useEffect, useState } from 'react';

const Graph = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    };

    getData();
  }, []);

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
        <span
  onClick={() => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  }}
  className={currentPage === 1 ? 'disabled' : ''}
>
  {'<'}
</span>


  {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
    (item, index) => {
      // Display the first page
      if (index === 0) {
        return (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        );
      }
      // Display '...' after page number 2
      else if (index === 2 && currentPage < 3) {
        return <span key={index}>...</span>;
      }
      // Display the last page
      else if (
        index === Math.ceil(data.length / itemsPerPage) - 1 &&
        index > Math.max(currentPage + 1)
      ) {
        return (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        );
      }
      // Display the current page and the two pages before and after
      else if (
        index >= currentPage - 1 &&
        index <= currentPage + 1 &&
        index < Math.ceil(data.length / itemsPerPage) 
      ) {
        return (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        );
      }
      return null;
    }
  )}

<span
  onClick={() => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      paginate(currentPage + 1);
    }
  }}
  className={currentPage === Math.ceil(data.length / itemsPerPage) ? 'disabled' : ''}
>
  {'>'}
</span>

</div>








      </div>
    </div>
  );
};

export default Graph;
