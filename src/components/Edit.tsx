import React, {
  useState,
  FC,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IPeople } from "../App";

interface IProps {
  p: IPeople;
  peoples: IPeople[];
  setPeoples: Dispatch<SetStateAction<IPeople[]>>;
}

const Edit: FC<IProps> = ({ p, setPeoples, peoples }) => {
  const [show, setShow] = useState<boolean>(false);

  const [fullname, setFullname] = useState<string>(p.fullname);
  const [age, setAge] = useState<string | number>(p.age);
  const [img_url, setImg_url] = useState<string>(p.img_url);
  const [bio, setBio] = useState<string | undefined>(p.bio);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!fullname || !age || !img_url) {
      return alert("fields is required");
    }
    const persons = [...peoples];
    const index: number = persons.findIndex((x) => x.id === p.id);
    persons[index] = {
      id: p.id,
      fullname,
      age: Number(age),
      img_url,
      bio,
    };
    setPeoples(persons);
    setShow(false);
  };
  return (
    <>
      <Button onClick={() => setShow(true)} variant="info">
        Edit
      </Button>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{p.fullname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEdit(e)}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    name="img_url"
                    type="text"
                    value={img_url}
                    onChange={(e) => setImg_url(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="bio"
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="success" onClick={handleClose}>
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* modal */}
      <div></div>
    </>
  );
};

export default Edit;
