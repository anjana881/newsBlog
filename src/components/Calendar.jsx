// import React, { useState } from "react";
// import { useEffect } from "react";
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Time from "./Time";

// const Calendar = () => {
//   const minDate = new Date();
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showTimeComponent, setShowTimeComponent] = useState(false);
//   minDate.setDate(minDate.getDate() - 1);
//   useEffect(() => {
//     const calendar = flatpickr("#my-calendar", {
//       mode: "single",
//       dateFormat: "Y-m-d",

//       disable: [
//         { from: "1900-01-01", to: minDate },
//         function (date) {
//           return date.getDay() === 0;
//         },
//       ],
//       locale: {
//         firstDayOfWeek: 1,
//       },
//       inline: true,
//     });
//     calendar.calendarContainer.addEventListener("click", (event) => {
//       if (event.target.classList.contains("flatpickr-day")) {
//         setSelectedDate(new Date(event.target.getAttribute("aria-label")));
//         setShowTimeComponent(true);
//       }
//     });
//   }, []);
//   const time = () => {
//     if (showTimeComponent && selectedDate) {
//       return (
//         <div>
//           Time Component
//           <Time />
//         </div>
//       );
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div id="my-calendar">
//       {showTimeComponent && selectedDate && (
//         <Time selectedDate={selectedDate} />
//       )}
//     </div>
//   );
// };

// export default Calendar;

import React, { useState } from "react";
import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Time from "./Time";

const Calendar = () => {
  const minDate = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTimeComponent, setShowTimeComponent] = useState(false);
  minDate.setDate(minDate.getDate() - 1);

  useEffect(() => {
    const calendar = flatpickr("#my-calendar", {
      mode: "single",
      dateFormat: "Y-m-d",
      disable: [
        { from: "1900-01-01", to: minDate },
        function (date) {
          return date.getDay() === 0;
        },
      ],
      locale: {
        firstDayOfWeek: 1,
      },
      inline: true,
    });

    calendar.calendarContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("flatpickr-day")) {
        setSelectedDate(new Date(event.target.getAttribute("aria-label")));
        setShowTimeComponent(true);
      }
    });
  }, []);

  return (
    <div>
      <div id="my-calendar"></div>
      {showTimeComponent && selectedDate ? <Time date={selectedDate} /> : null}
    </div>
  );
};

export default Calendar;
