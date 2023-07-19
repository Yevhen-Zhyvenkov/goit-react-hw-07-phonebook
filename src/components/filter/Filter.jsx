import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filtersSlices";
import { getFilter } from "redux/selectors";
import css from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFilter);
    
    const handleChange = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };
    
    return (
        <label >
            Find contacts by Name
            <input
                className={css.width}
                type='text'
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