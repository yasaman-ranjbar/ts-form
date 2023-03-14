import { useState, FormEvent, FC, Dispatch, SetStateAction } from "react";
import { IPeople } from "../App";
import { Button, Form, Row, Col } from "react-bootstrap";

interface IProps {
  peoples: IPeople[];
  setPeoples: Dispatch<SetStateAction<IPeople[]>>;
}
// FC (functional component)
const Add: FC<IProps> = ({ peoples, setPeoples }) => {
  const [fullname, setFullname] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [img_url, setImg_url] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleResetState = (): void => {
    // void only does opration and it does'nt return anything
    setFullname("");
    setAge("");
    setImg_url("");
    setBio("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!fullname || !age || !img_url) {
      return alert("fields is required");
    }

    setPeoples([
      ...peoples,
      {
        id: Math.floor(Math.random() * 1000000),
        fullname,
        age: Number(age),
        img_url,
        bio,
      },
    ]);

    handleResetState();
  };

  return (
    <div className="mt-8">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                name="fullname"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                value={age}
                onChange={(e) => setAge(e.target.value)}
                name="age"
                type="number"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                value={img_url}
                onChange={(e) => setImg_url(e.target.value)}
                name="img_url"
                type="text"
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
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                name="bio"
                rows={3}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          name="fullname"
          placeholder="name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          placeholder="age"
        />
        <input
          type="text"
          value={img_url}
          onChange={(e) => setImg_url(e.target.value)}
          name="img_url"
          placeholder="image"
        />
        <textarea
          rows={7}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          name="bio"
          placeholder="bio"
        ></textarea>
        <button type="submit">submit</button>
        <button onClick={handleResetState}>reset</button>
      </form> */}
    </div>
  );
};

export default Add;
