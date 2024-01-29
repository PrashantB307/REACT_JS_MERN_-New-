import React, { useReducer} from "react";

enum Actions {
    GOOD_MORNING = "Good Morning",
    GOOD_AFTERNOON = "Good Afternoon",
    GOOD_NIGHT = "Good Night"
}

interface InitialState {
    msg : string;
}

interface ActionType {
    type : string;
}

const initialState : InitialState = {
    msg : "" 
}

const reducer = (state : InitialState, action : ActionType) => {
    switch (action.type) {
        case Actions.GOOD_MORNING:
            return{
                msg : Actions.GOOD_MORNING
            };
        
        case Actions.GOOD_AFTERNOON:
            return{
                msg : Actions.GOOD_AFTERNOON
            };

        case Actions.GOOD_NIGHT:
            return{
                msg : Actions.GOOD_NIGHT
            };   
        
        default : 
            return state;
    }
};

export const GreetMessage: React.FC = () => {
  
    const [msgObj, dispatch] = useReducer(reducer, initialState);

  const clickGM = () => {
    dispatch ({
        type : Actions.GOOD_MORNING
    });
  };

  const clickGA = () => {
    dispatch ({
        type : Actions.GOOD_AFTERNOON
    });
  };

  const clickGN = () => {
    dispatch ({
        type : Actions.GOOD_NIGHT
    });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-header">
                <p className="h3">Use Reducer()</p>
              </div>
              <div className="card-body">
                <p className="h3">
                  Hello
                  <span className="fw-bold"> {msgObj.msg}</span>
                </p>
                <button className="btn btn-success me-2" onClick={clickGM}>
                  Good Morning
                </button>
                <button className="btn btn-warning me-2" onClick={clickGA}>
                  Good AfterNoon
                </button>
                <button className="btn btn-danger me-2" onClick={clickGN}>
                  Good Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreetMessage;
