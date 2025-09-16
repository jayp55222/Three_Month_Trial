import { useSelector } from "react-redux";
import Hero from "./components/CustomeComponents/Hero";
import Navbar from "./components/CustomeComponents/Navbar";
import { UpdateStudentForm } from "./components/CustomeComponents/UpdateStudentForm";
import { Toaster } from "react-hot-toast";
import type { RootState } from "./store";

const App = () => {
  const view_update_bool = useSelector(
    (state: RootState) => state.updateFormBoolean.value
  );
  return (
    <div className="relative h-full ">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
      <Navbar />
      <Hero />
      {view_update_bool && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <UpdateStudentForm />
        </div>
      )}
    </div>
  );
};

export default App;
