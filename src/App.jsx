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
import EditFieldClassDepartment from "./Pages/ClassifiedsDepartments/Fields/EditFieldClassDepartment";
import Elements from "./Pages/YellowPagesDepartments/Elements/Elements";
import AddElement from "./Pages/YellowPagesDepartments/Elements/AddElement";
import Posts from "./Pages/ClassifiedsDepartments/Posts";
import YellowPagesServices from "./Pages/YellowPages/YellowPagesServices";
import EditYellowPageServices from "./Pages/YellowPages/YellowPagesServices/:id";
import Countries from "./Pages/Countries/Countries";
import AddCountry from "./Pages/Countries/AddCountry";
import AddServices from "./Pages/YellowPages/YellowPagesServices/new";
import Currencies from "./Pages/Currencies";
import AddCurrency from "./Pages/Currencies/new";
import EditCountries from "./Pages/Countries/EditCountries";
import Provencies from "./Pages/Countries/Provencies";
import EditProvency from "./Pages/Countries/Provencies/:id";
import AddProvency from "./Pages/Countries/Provencies/new";
import Cities from "./Pages/Countries/Provencies/City";
import AddCity from "./Pages/Countries/Provencies/City/new";
import EditCity from "./Pages/Countries/Provencies/City/:id";
import Languages from "./Pages/Languages";
import AddLanguage from "./Pages/Languages/new";
import Blog from "./Pages/Blog";
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
            <Route
              path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId/field"
              element={<FieldClassDepartment />}
            />
            <Route
              path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId/posts"
              element={<Posts />}
            />
            <Route
              path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId/addfield"
              element={<AddFieldClassDepartment />}
            />
            <Route
              path="/classifieds/:classifiedid/classifiedsdepartments/:classifiedDepartmentId/edit/:fieldId"
              element={<EditFieldClassDepartment />}
            />
            <Route
              path="/classifieds/editclassified/:classifiedid"
              element={<EditClassified />}
            />
          </Route>
          <Route path="/yellowpages">
            <Route index element={<YellowPages />} />
            <Route
              path="/yellowpages/yellowpagesServices"
              element={<YellowPagesServices />}
            />
            <Route
              path="/yellowpages/yellowpagesServices/:serviceId"
              element={<EditYellowPageServices />}
            />
            <Route
              path="/yellowpages/yellowpagesServices/addservices"
              element={<AddServices/>}
            />
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
            <Route
              path="/yellowpages/:yallowPageId/yellowpagesdepartments/:yellowPageDepartmentId/elements"
              element={<Elements />}
            />
            <Route
              path="/yellowpages/:yallowPageId/yellowpagesdepartments/:yellowPageDepartmentId/addelement"
              element={<AddElement />}
            />
          </Route>
          <Route path="/Countries">
            <Route index element={<Countries />} />
            <Route
              path="/Countries/addcountry"
              element={<AddCountry />}
            />
            <Route
              path="/Countries/Edit/:countryId"
              element={<EditCountries />}
            />
            <Route
              path="/Countries/provencies/:countryId"
              element={<Provencies />}
            />
            <Route
              path="/Countries/provencies/:countryId/edit/:provencyId"
              element={<EditProvency />}
            />
            <Route
              path="/Countries/provencies/:countryId/addProvency"
              element={<AddProvency />}
            />
             <Route
              path="/Countries/:countryId/provencies/:provencyId/cities"
              element={<Cities/>}
            />
            <Route
              path="/Countries/:countryId/provencies/:provencyId/addcity"
              element={<AddCity/>}
            />
            <Route
              path="/Countries/:countryId/provencies/:provencyId/edit/:cityId"
              element={<EditCity />}
            />
          </Route>
          <Route path="/lang">
            <Route index element={<Languages />} />
            <Route
              path="/lang/addlang"
              element={<AddLanguage />}
            />
          </Route>
          <Route path="/blogs">
            <Route index element={<Blog/>} />
            <Route
              path="/blogs/addblog"
              element={<AddLanguage />}
            />
          </Route>
          <Route path="/currencies">
            <Route index element={<Currencies />} />
            <Route
              path="/currencies/addcurrency"
              element={<AddCurrency />}
            />
            {/* <Route
              path="/currencies/Edit/:countryId"
              element={<AddCountry />}
            /> */}
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
