// import React, { useState } from "react";
// import { HiChevronDown } from "react-icons/hi";
// import cls from "classnames";

// import { AiOutlineCodeSandbox } from "react-icons/ai";

// const SidebarBox = ({ title, list, index }) => {
//   const [isActive, setActive] = useState(true);

//   return (
//     <div className="sidebar__box">
//       <div
//         className={cls("sidebar__box-heading", index == 0 && "sidebar__active")}
//         onClick={(e) => setActive(!isActive)}
//       >
//         <div className="sidebar__box-title">
//           <AiOutlineCodeSandbox />
//           <h4>{title}</h4>
//         </div>
//         <div className="sidebar__box-dropdown">
//           <HiChevronDown />
//         </div>
//       </div>

//       {isActive && (
//         <ul className="sidebar__list">
//           {list.map((item, key) => {
//             return (
//               <li key={key} className="sidebar__list-item">
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SidebarBox;
