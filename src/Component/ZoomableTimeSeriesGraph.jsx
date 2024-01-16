import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { marketData } from "../helper";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Modal from "react-modal"; 
import '../CSS files/GraphLine.css'

const ZoomableTimeSeriesGraph = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [data, setData] = useState({
    series: [
      {
        
        data: [],
      },
    ],
    options: {
      chart: {
        id: "stock-chart",
        type: "line",
        height: 100,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false, // hide the toolbar
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false, // hide x-axis labels
        },
        grid: {
          show: false, // hide x-axis grid lines
        },
        markers: {
          show: false, // hide data point markers
        },
      },
      yaxis: {
        
        labels: {
          show: false, // hide x-axis labels
        },
      },

      stroke: {
        width: 2, // decrease the width of the line
      },
      grid: {
        show: false, // hide the grid
      },
      markers: {
        show: false, // hide data point markers
      },
      
    },
  });

  useEffect(() => {
    const arr = [];
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Assuming the API response is an array of objects with x and y properties
    const seriesData = marketData.slice(startIndex, endIndex).map((item) => {
      const dataPoints = item.jsonData.map((graph) => {
        return {
          x: new Date(graph.timestamp).getTime(),
          y: graph.price,
        };
      });
    
      const color = determineLineColor(dataPoints);
    
      return {
        companyName: item.companyName,
        marketPrice: item?.marketPrice,
        marketPercentaged: item?.marketPercentaged,
        data: dataPoints,
        color: color,
      };
    });
    //

    console.log(seriesData);
 
    // Update the state with API data
    setData({
      series: seriesData,
     
      options: {
        ...data.options,
      },
    });

    setSelectedData(null);
  }, [marketData, currentPage, itemsPerPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };


  const handleWatchlistClick = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

   const determineLineColor = (dataPoints) => {
  const lastDataPoint = dataPoints[dataPoints.length - 1].y;
  const secondLastDataPoint = dataPoints[dataPoints.length - 2].y;

  return lastDataPoint > secondLastDataPoint ? "#5BFF33" : "#FF3933";
};
  return (
    <div className="app">
      <h1 className="first-heading">Top by Market Cap</h1>
      {/* <h2>Zoomable Time Series Stock Market Graph</h2> */}
      <table className="graphtable">
        <thead>
        <tr className="graphtr">
          <th className="graphth">Company</th>
          <th className="graphth">Graph</th>
          <th className="graphth">Market Price</th>
          <th className="graphth">Watchlist</th>
        </tr>
        </thead>
        <tbody>
          {data?.series.map((value, index) => {
          return (
            <>        
              <tr key={index} className="graphtr">
                <td className="graphtd">{value.companyName}</td>
                <td className="graphtd">                 
                  <ReactApexChart
                    options={data.options}
                    series={[{ ...value, color: value.color }]}
                    type="line"
                    height={50}
                    width={100}
                  />
                </td>
                <td className="graphtd">
                  <FaRupeeSign size={13} />
                  <span>{value.marketPrice}</span>
                  <br />
                  <span className="colorgreen">{value.marketPercentaged}</span>
                </td>
                 <td key={index} className="graphtd">
                <IoIosAddCircleOutline
                  className="coloradd"
                  size={20}
                  onClick={() => handleWatchlistClick(value)}
                />
              </td>
              </tr>
            </>
          );
        })}
        </tbody>
       
      </table>
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Data Modal"
      >
        <h4>Selected Data:</h4>
        {selectedData && (
          <>
            <p>Company Name: {selectedData.companyName}</p>
            <p>
              <ReactApexChart
                options={data.options}
                series={[{ ...selectedData, color: selectedData.color }]}
                type="line"
                height={200}
              />
            </p>
            <p>
              Market Price: <FaRupeeSign size={13} />
              <span>{selectedData.marketPrice}</span>
              <br />
              <span className="colorgreen">{selectedData.marketPercentaged}</span>
            </p>
          </>
        )}
        <button onClick={closeModal} className="closebtn" >Close</button>
      </Modal>
      <div className="paginateBox">
        <ReactPaginate
        pageCount={Math.ceil(marketData.length / itemsPerPage)}
        pageRangeDisplayed={10}
        onPageChange={handlePageClick}
        activeClassName="active" // Class for the active page
        pageClassName="page"
        marginPagesDisplayed={2}
        breakLabel="..." // Ellipsis text for collapsed pages
        breakClassName="break"
        nextLabel=">"
        nextClassName="next"
        previousClassName="previous"
        previousLabel="<"
      /></div>
    </div>
  );
};

export default ZoomableTimeSeriesGraph;