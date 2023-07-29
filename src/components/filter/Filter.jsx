import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from 'redux/selectors';
import { setFilter } from "redux/filtersSlices";
import css from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
        
  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label>
      <input className={css.width}
        type="text"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange} />
    </label>
  );
};





// import PropTypes from 'prop-types';
// import css from './Filter.module.css'

// const Filter = ({ value, onChange }) => {
//     return (
//         <label >
//             Find contacts by Name
//             <input
//                 className={css.width}
//                 type='text'
//                 value={value}
//                 onChange={onChange} />
//         </label>
//     );
// };

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }

// export default Filter;