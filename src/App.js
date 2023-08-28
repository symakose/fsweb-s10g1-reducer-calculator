import React from "react";
import { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  total: 0,
  operation: "X",
  memory: 0,
};

const actions = {
  add: "ADD_ONE",
  applyNumber: "APPLY_NUMBER",
  change: "CHANGE_OPRATION",
  clearDisplay: "CLEAR_DISPLAY",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: "ADD_ONE" })}
              />
              <CalcButton
                value={"MR"}
                onClick={() =>
                  dispatch({ type: "APPLY_NUMBER", payload: state.memory })
                }
              />
              <CalcButton
                value={"MC"}
                onClick={() =>
                  dispatch({ type: "CHANGE_OPERATION", payload: 0 })
                }
              />
            </div>

            <div className="row">
              <CalcButton value={1} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() =>
                  dispatch({ type: "CHANGE_OPERATION", payload: "+" })
                }
              />
              <CalcButton
                value={"*"}
                onClick={() =>
                  dispatch({ type: "CHANGE_OPERATION", payload: "*" })
                }
              />
              <CalcButton
                value={"-"}
                onClick={() =>
                  dispatch({ type: "CHANGE_OPERATION", payload: "-" })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: "CLEAR_DISPLAY" })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
