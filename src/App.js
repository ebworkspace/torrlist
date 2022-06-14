import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import mytext from "./demoText.js";
// import fileNames from "./myfile.js";
import fileNames from "./myfileV.js";
import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  Container,
  Badge,
} from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //     fetch('./list.txt')
  //     .then((r) => r.text())
  //     .then(text  => {
  //       console.log(text);
  //     })

  // }, [])

  useEffect(() => {
    // console.log(mytext);
    // console.log(mytext.split("\n"));
    // setData(mytext.split("\n"));
    try {
      // console.log(fileNames);
      // console.log(typeof fileNames);
      let fileNamesArray = fileNames.split("\n");
      fileNamesArray = fileNamesArray.map((file) => {
        let date = file.split(" ")[0];
        // let size = file.split(" ")[1];
        // let size = file.split(/(\s+)/);
        let size = file.split(/(\s+)/)[4];
        // console.log(date);
        // console.log(size);
        file = file.slice(0, -8);
        // file = file.slice(25);
        file = file.slice(35);
        return file;
      });
      // console.log(fileNamesArray);
      // setData(fileNames.split("\n")); //Can use toString() in some cases if issues comeup
      setData(fileNamesArray); //Can use toString() in some cases if issues comeup
      // console.log(fileNames);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setSearchTerm(e.target.value);
      setDisplayData(
        [...data].filter((item) =>
          item.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setDisplayData([]);
      setSearchTerm("");
      displayInitial();
    }
  };

  const handleExplicitSearch = (e) => {
    e.preventDefault();
    console.log("Explicit Search");
    if (searchTerm.length > 0) {
      setDisplayData(
        [...data].filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      displayResults();
    } else {
      setDisplayData([]);
      setSearchTerm("");
      displayInitial();
    }
  };

  const displayResults = () => {
    let initial = document.getElementById("initial");
    let purgatory = document.getElementById("purgatory");
    let final = document.getElementById("final");
    initial.style.display = "none";
    purgatory.style.display = "none";
    final.style.display = "block";
  };

  const displayInitial = () => {
    let initial = document.getElementById("initial");
    let purgatory = document.getElementById("purgatory");
    let final = document.getElementById("final");
    initial.style.display = "block";
    purgatory.style.display = "block";
    final.style.display = "none";
  };

  const closeWindow = (e) => {
    // if (e.code === "Enter") {
    window.close();
    // }
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Torrent List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-center w-50"
          >
            <Form className="d-flex w-75">
              <FormControl
                type="search"
                placeholder={`Search from ${data.length} items...`}
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleSearch(e)}
              />
              <Button
                onClick={(e) => handleExplicitSearch(e)}
                variant="outline-success"
              >
                Search
              </Button>
              <Button onClick={(e) => closeWindow(e)} variant="outline-success">
                Exit
              </Button>
              {/* <a href="location.reload()">Refresh Page</a> */}
              <a href="javascript:window.location.href=window.location.href">
                Refresh Page
              </a>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <p>
        Searching for - "<Badge bg="secondary">{searchTerm}</Badge>". Found{" "}
        {displayData.length} results.
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 initial" id="initial">
            <h1 className="display-6">Total</h1>
            {data &&
              data.map((item, i) => {
                return (
                  <p className="name" key={i}>
                    {item}
                  </p>
                );
              })}
          </div>
          <div className="col-md-6 purgatory" id="purgatory">
            <h1 className="display-6">Search Result</h1>
            {displayData &&
              displayData.map((item, i) => {
                return (
                  <p className="result" key={i}>
                    {item}
                  </p>
                );
              })}
          </div>
          <div className="col-md-6 final" id="final">
            {displayData &&
              displayData.map((item, i) => {
                return (
                  <p className="final-item" key={i}>
                    {item}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
