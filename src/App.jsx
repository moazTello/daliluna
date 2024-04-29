import "./App.css";
import AddClassified from "./Pages/Classifieds/AddClassified";
import ClassifiedsDepartments from "./Pages/ClassifiedsDepartments/ClassifiedsDepartments";
import YellowPages from "./Pages/YellowPages/YellowPages";
import YellowPagesDepartments from "./Pages/YellowPagesDepartments/YellowPagesDepartments";
import Classifieds from "./Pages/Classifieds/Classifieds";
import Login from "./Pages/login/Login";
import AddYellowPage from "./Pages/YellowPages/AddYellowPage";
import AddClassifiedDepartment from "./Pages/ClassifiedsDepartments/AddClassifiedDepartment";
import AddYellowPageDepartment from "./Pages/YellowPagesDepartments/AddYellowPageDepartment";
import Missing from "./Pages/Missing/Missing";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import TableDesy from "./Components/TableDesy";
import EditClassified from "./Pages/Classifieds/EditClassified";
import EditClassifiedDepartment from "./Pages/ClassifiedsDepartments/EditClassifiedDepartment";
import EditYellowPage from "./Pages/YellowPages/EditYellowPage";
import EditYellowPagesDepartment from "./Pages/YellowPagesDepartments/EditYellowPageDepartment";
import { Toaster } from "react-hot-toast";
import AddFieldClassDepartment from "./Pages/ClassifiedsDepartments/Fields/AddFieldClassDepartment";
import FieldClassDepartment from "./Pages/ClassifiedsDepartments/Fields/FieldClassifiedDepartment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/classifieds">
            <Route index element={<Classifieds />} />
            <Route
              path="/classifieds/:departmentId/classifiedsdepartments"
              element={<ClassifiedsDepartments />}
            />
            <Route
              path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId"
              element={<EditClassifiedDepartment />}
            />
          <Route path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId/field" element={<FieldClassDepartment/>} /> 
            <Route
              path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId/addfield"
              element={<AddFieldClassDepartment />}
            />
            <Route
              path="/classifieds/editclassified/:classifiedid"
              element={<EditClassified />}
            />

          </Route>
          <Route path="/yellowpages">
            <Route index element={<YellowPages />} />
            <Route
              path="/yellowpages/:yellowpageId/yellowpagesdepartments"
              element={<YellowPagesDepartments />}
            />
            <Route
              path="/yellowpages/edityellowpage/:yellowpageId"
              element={<EditYellowPage />}
            />
            <Route
              path="/yellowpages/:yellowpageId/yellowpagesdepartments/:yellowdepartmentId"
              element={<EditYellowPagesDepartment />}
            />
          </Route>
          <Route
            path="/addclassifieddepartment/:classifiedId"
            element={<AddClassifiedDepartment />}
          />
          <Route path="/addclassified" element={<AddClassified />} />
          <Route path="/addyellowpage" element={<AddYellowPage />} />
          <Route
            path="/addyellowpagedepartment"
            element={<AddYellowPageDepartment />}
          />
          <Route path="/desy" element={<TableDesy />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
export default App;
