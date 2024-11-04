import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget, updateBudget } from "../../utils/budget-utlis";


const Budget = () => {
  const { budget }  = useContext(AppContext);
  const { setBudget }  = useContext(AppContext);

  useEffect(() => {
    loadBudget();
    }, []);
  
    // Function to load budget and handle errors
    const loadBudget = async () => {
    try {
      const newBudget = await fetchBudget();
      setBudget(newBudget);
    
    } catch (err: any) {
      console.log(err.message);
    }
    };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateBudget(budget);
  };


    
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="budget">Budget</label>
          <input
            required
            type="number"
            className="form-control"
            id="budget"
            value={budget}
            // HINT: onChange={}
            onChange={(e)=> setBudget(Number(e.target.value))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
      <div>Budget: ${budget}</div>
    </div>
  );
};

export default Budget;
