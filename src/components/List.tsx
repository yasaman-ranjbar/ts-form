import React, { FC, Dispatch, SetStateAction } from "react";
import { IPeople } from "./../App";
import { Card, Button, Row, Col } from "react-bootstrap";
import Edit from "./Edit";

interface IProps {
  peoples: IPeople[];
  setPeoples: Dispatch<SetStateAction<IPeople[]>>;
}

const List: FC<IProps> = ({ peoples, setPeoples }) => {
  const handleDelete = (id: number): void => {
    const persons: IPeople[] = [...peoples];
    const filteredPeople: IPeople[] = persons.filter((x) => x.id !== id);
    setPeoples(filteredPeople);
  };


  const renderList: JSX.Element[] = peoples.map((p) => (
    <Col md={4}>
      <Card style={{ width: "18rem" }} key={p.id}>
        <Card.Img variant="top" src={p.img_url} />
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card.Title>{p.fullname}</Card.Title>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Card.Title>{p.age}</Card.Title>
            </Col>
          </Row>

          <Card.Text>{p.bio}</Card.Text>
          <Row>
            <Col md={4}>
              <Button onClick={() => handleDelete(p.id)} variant="danger">
                Delete
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Edit p={p} setPeoples={setPeoples} peoples={peoples} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  ));
  return <Row style={{ marginTop: "20px" }}>{renderList}</Row>;
};

export default List;
