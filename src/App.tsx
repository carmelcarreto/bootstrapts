
import { BrowserRouter as Routes, Route} from "react-router-dom";
import Home from './routes/Root';
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pagina1" element={ <Pagina1 />} />
      <Route path="pagina2" element={ <Pagina2 />} />
    </Routes>
    </>
  );
}
