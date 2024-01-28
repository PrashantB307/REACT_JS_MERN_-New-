import React, { useState } from "react";
import "./App.css";

import ComponentA from "./components/Context-API/ComponentA";
import { AppData } from "./components/Context-API/models/AppData";

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
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body bg-light">
                <pre>{JSON.stringify(appData)}</pre>
                <pre>From Child : {JSON.stringify(childText)}</pre>
                <p>App Component</p>

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
