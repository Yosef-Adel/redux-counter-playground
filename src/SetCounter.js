import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const state = useSelector((state) => state.count);
  const [count, setCount] = useState(state);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(state);
  }, [state]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
