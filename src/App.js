import HomePage from "./Components/HomePage/HomePage.js";
import DatabasesPage from "./Components/FoodDatabasesPage/FoodDatabasesPage/DatabasesPage.js";
import CareersPage from "./Components/CareersPage/Careers/CareersPage.js";
import ReactPosition from "./Components/CareersPage/ReactPosition/ReactPosition.js";
import AccountantPosition from "./Components/CareersPage/Accountant/AccountantPosition.js";
import IntelligencePosition from "./Components/CareersPage/IntelligencePosition/IntelligencePosition.js";
import ContactUsPage from "./Components/ContactUs/ContactUsPage.js";
import CloudPosition from "./Components/CareersPage/CloudPosition/CloudPosition.js";
import MachinePosition from "./Components/CareersPage/MachinePosition/MachinePosition.js";
import RecipeDatabase from "./Components/FoodDatabasesPage/RecipeDatabase/RecipeDatabasePage.js";
import NutritionDatabase from "./Components/FoodDatabasesPage/NutritionDatabase/NutritionDatabasePage.js";
import About from "./Components/About/AboutPage.js";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Database" element={<DatabasesPage />} />
        <Route path="/Careers" element={<CareersPage />} />
        <Route path="/ReactPosition" element={<ReactPosition />} />
        <Route path="/MachinePosition" element={<MachinePosition />} />
        <Route path="/Accountant" element={<AccountantPosition />} />
        <Route path="/CloudPosition" element={<CloudPosition />} />
        <Route path="/Recipe" element={<RecipeDatabase />} />
        <Route path="/Nutrition" element={<NutritionDatabase />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/IntelligencePosition"
          element={<IntelligencePosition />}
        />
      </Routes>
    </>
  );
}
