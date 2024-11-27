import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePageCard = ({ title, text }) => {
  return (
    <Card className="text-center h-100">
      <Card.Img
        variant="top"
        src="/logo192.png"
        style={{ objectFit: "contain", height: "200px" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button className="fw-bold" variant="primary">
          Find Out More!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HomePageCard;
