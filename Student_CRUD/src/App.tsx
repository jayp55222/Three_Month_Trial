import { useSelector } from "react-redux";
import Hero from "./components/CustomeComponents/Hero";
import Navbar from "./components/CustomeComponents/Navbar";
import { UpdateStudentForm } from "./components/CustomeComponents/UpdateStudentForm";
import { Toaster } from "react-hot-toast";
import type { RootState } from "./store";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const { showform } = useSelector((state: RootState) => state.boolean);

  return (
    <>
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

        {showform && (
          <AnimatePresence>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "tween", stiffness: 200, damping: 20 }}
            >
              <UpdateStudentForm />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default App;
