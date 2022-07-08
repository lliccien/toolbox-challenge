import { Routes, Route, useSearchParams } from "react-router-dom";
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Headers from "./components//Headers/Headers";
import FilesTable from './components/FilesTable/FilesTable';


function App() {
  const [searchParams] = useSearchParams();

  const fileName = searchParams.get("fileName");

  return (
    <>
      <Headers />
      <br />
      <Container>
        <Routes>
          <Route path="/" element={<FilesTable fileName={fileName}/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
