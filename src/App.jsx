import { useState } from "react";

import "./App.css";
import right_arrow from "./assets/right.svg";
import left_arrow from "./assets/left.svg";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(selectedDate);
  const daysInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    console.log(firstDay.getDay());
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
      );
    }
    // console.log(lastDay);
    return daysArray;
  };
  // daysInMonth();
  const handelChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
  };
  const handelChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  };
  const isSmasDay = (date1, date2) => {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  return (
    <>
      <div className="calendar">
        <div className="header">
          <button>
            <img
              src={left_arrow}
              onClick={() => {
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() - 1,
                    1
                  )
                );
              }}
            />
          </button>
          <select value={selectedDate.getMonth()} onChange={handelChangeMonth}>
            {month.map((item, index) => (
              <option key={index} value={index}>
                {item}
              </option>
            ))}
          </select>
          <select
            value={selectedDate.getFullYear()}
            onChange={handelChangeYear}
          >
            {Array.from({ length: 10 }, (_, i) => 2024 - 5 + i).map(
              (item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
          <button>
            <img
              src={right_arrow}
              onClick={() => {
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() + 1,
                    1
                  )
                );
              }}
            />
          </button>
        </div>
        <div className="daysOfweek">
          {daysOfWeek.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="days">
          {daysInMonth().map((item, index) => (
            <div key={index} className={item ?(isSmasDay(item,new Date()))?"day current" :"day" : "empty"}>
              {item ? item.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
