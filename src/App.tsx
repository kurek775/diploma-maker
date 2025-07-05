import "./App.css";
import AdminDashboard from "./pages/adminDashboard";
import LoginScreen from "./pages/loginScreen";
import ResultsChecker from "./pages/resultsChecker";
import TemplateCreator from "./pages/templateCreator";
import UploadPhoto from "./pages/uploadPhoto";
import UserDashboard from "./pages/userDashboard";

function App() {
  return (
    <>
      <AdminDashboard />
      <LoginScreen />
      <ResultsChecker />
      <TemplateCreator />
      <UploadPhoto />
      <UserDashboard />
    </>
  );
}

export default App;
