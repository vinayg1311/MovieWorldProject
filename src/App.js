import './App.css';
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer,ScrollToTop } from './components';


function App() {
  return (
    <div>
      <Header/>
      <div className="dark:bg-slate-800">
        <ScrollToTop/>
      <main>
        <AllRoutes/>
      </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
