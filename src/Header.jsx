import { useState, useEffect } from "react";
import { Button, Navbar, Container, Form } from "react-bootstrap";

export default function Header({ onSearch }) {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");

  async function handleSearch() {
    if(!name.trim()) return;
    setLoading( true )
    try{
      await onSearch(name)
    } finally {
      setLoading(false)
    }
    setName('')
  }

  const handleClick = () => {
    handleSearch()
  };

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch()
    }
  }

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#00838F" }}>
      <Container fluid style={{ marginLeft: "20px" }}>
        <Navbar id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              style={{ width: "900px" }}
              type="search"
              placeholder="Введите название репозитория"
              className="me-2"
              aria-label="Search"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleEnter}
            />
            <Button
              variant="primary"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Подождите…" : "Искать"}
            </Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>
  );
}
