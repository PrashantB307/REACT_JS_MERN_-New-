import React, { useState } from "react";
import "./App.css";
import ComponentA from "./components/Props-Drilling/ComponentA";
import { AppData } from "./components/Props-Drilling/models/AppData";
// import ParentCard from "./components/intermediate/ParentCard";
// import UserManager from "./components/User Manager/componets/UserManager";



interface UpdateChildType {
  updateChild: (msg: string) => void;
}

export const AppDataContext = React.createContext<AppData>({} as AppData);
export const UpdateChildcontext = React.createContext<UpdateChildType>(
  {} as UpdateChildType
);

const App: React.FC = () => {
  const [appData] = useState<AppData>({
    name: "React JS",
    version: 18.0,
    author: "Meta",
  });

  const [childText, setChildText] = useState<string>("");

  const updateChildFn = (msg: string): void => {
    setChildText(msg);
  };

  return (
    <>
      {/* <ParentCard/> */}
      {/* <UserManager/> */}

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body bg-light">
                <pre>{JSON.stringify(appData)}</pre>
                <pre>From Child : {JSON.stringify(childText)}</pre>
                <p>App Component</p>
                {/* <ComponentA appData = {appData}/> */}

                <AppDataContext.Provider value={appData}>
                  {/* <ComponentA /> */}
                  <UpdateChildcontext.Provider value={{ updateChild: updateChildFn }}>
                    <ComponentA />
                  </UpdateChildcontext.Provider>
                </AppDataContext.Provider>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
