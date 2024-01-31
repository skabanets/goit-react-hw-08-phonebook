import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, resetFilter, selectFilters } from '../../redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <div className="flex flex-col mt-4 px-7">
      <h2 className="text-white font-bold">Find contacts by name</h2>
      <div className="flex flex-row gap-5 py-6">
        <input
          className="px-3.5 w-80"
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />

        <button
          className="btn bg-[#ffd300] hover:bg-[#ffa902]"
          type="button"
          onClick={() => dispatch(resetFilter())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
