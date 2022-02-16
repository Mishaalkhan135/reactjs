import propTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
const PropsDemo = (props) => {
  const [apiArr, setApiArr] = useState([]);
  const [allArr, setAllArr] = useState([]);
  const [apiCallsCount, setApiCallsCount] = useState(0);
  const [currentindex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  useEffect(() => {
    if (allArr?.length && currentindex <= 5000) {
      setTimeout(() => {
        setApiArr(allArr?.slice(0, 10));
        setCurrentIndex(currentindex + 10);
        setApiCallsCount(apiCallsCount + 1);
      }, 3000);
    }
  }, [apiCallsCount]);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      console.log("data", res.data);
      setApiArr(res?.data?.slice(currentindex, currentindex + 10));
      setAllArr(res?.data);
      setCurrentIndex(10);
      setApiCallsCount(1);
    });
  };

  return (
    <div>
      <h1>Props Message</h1>
      {/* <p>{props.message}</p> */}
      <p>Api Calls:{apiCallsCount}</p>
      <p>Current Index {currentindex}</p>
      <div>
        {!apiArr?.length ? (
          <p>Loading Data ...</p>
        ) : (
          apiArr.map((v, i) => {
            return (
              <div key={i}>
                <p>Title:{v?.title}</p>
                <img src={v?.thumbnailUrl} alt={v?.title} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
PropsDemo.propTypes = {
  message: propTypes.string.isRequired,
};
PropsDemo.defaultProps = {
  message: "This is default props",
};
export default PropsDemo;
