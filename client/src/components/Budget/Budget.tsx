import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget } from "../../utils/budget-utlis";


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


    
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: ${budget}</div>
    </div>
  );
};

export default Budget;
