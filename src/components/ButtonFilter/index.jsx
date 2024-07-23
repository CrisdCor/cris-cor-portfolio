import "./styles.css";

export const ButtonFilters = ({ key, onClick, className, label }) => {
  return (
    <button key={key} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

// return (
//   <>
//     {typeProjects.map(
//       (el) =>
//         el.active && (
//           <button
//             key={el.name}
//             onClick={() => handleButton(el.name)}
//             className={`filter-toggle text-regular text-m ${
//               filter === el.name ? "filter-toggle--active" : ""
//             }`}
//           >
//             {el.desc}
//           </button>
//         )
//     )}
//   </>
// );
// };
