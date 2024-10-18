import { useState } from "react"

function App() {
  // defining state
  const [weight, setweight] = useState(0);
  const [height,setheight] = useState(0);
  const [Bmi,setbmi] = useState("");
  const [healthCondition,sethealthCondition] = useState("");


  // bmi calculations
  function bmicalc(e){

    e.preventDefault();

      let height_meter = height * 0.3048;
      const bmi = (weight/(height_meter*height_meter));
      setbmi(`Your BMI is: ${bmi.toFixed(1)}`);

      if(bmi <= 18.4){
        sethealthCondition(`You are Underweight`);
      }
      else if(bmi > 18.4 && bmi <= 24.9){
        sethealthCondition(`You are Normal`);
      }
      else if(bmi > 24.9 && bmi <= 39.9){
        sethealthCondition(`You are Overweight`);
      }
      else{
        sethealthCondition(`You are Obese`);
      }
    
    }

  // Reload
  function reload(){
    window.location.reload();
  }

  return (
    <>
    <center>
      <div className="card bg-base-100 w-96 shadow-xl mt-10">
        <div className="card-body">
          <h1 className="text-lg font-bold">BMI Calculator</h1>
          <form className="flex flex-col justify-start items-start gap-3">
          <div className="text-start">
            <label className="text-sm">Weight (2-130 Kg)</label>
            <input type="number" placeholder="Weight" className="input input-bordered w-full max-w-xs mt-3" value={weight} onChange={(e) => {setweight(e.target.value);}} min={2} max={130} />
            <label className="text-sm">Height (2-9 ft)</label>
            <input type="number" placeholder="height" className="input input-bordered w-full max-w-xs mt-3" value={height} onChange={(e) => {setheight(e.target.value);}} min={2} max={9} />
          </div>

          <div className="space-x-3">
            <button type="submit" className="btn btn-success" onClick={bmicalc}>Submit</button>
            <button className="btn btn-error" type="reset" onClick={reload}>Reload</button>
          </div>
          </form>

          <div>
            <p className="text-xl">{Bmi}</p>
            <p className="text-sm">{healthCondition}</p>
          </div>


        </div>
      </div>
    </center>
    </>
  )
}

export default App
