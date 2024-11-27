import HomePageCard from "../components/HomePageCard";
import HomePageContent from "../components/HomePageContent";
import HomePageFooter from "../components/HomePageFooter";
import HomePageHeader from "../components/HomePageHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  const cardsData = [
    { id: 1, title: "React card 1", text: "This is the first react card." },
    { id: 2, title: "React card 2", text: "This is the second react card." },
    { id: 3, title: "React card 3", text: "This is the third react card." },
    { id: 4, title: "React card 4", text: "This is the fourth react card." },
  ];
  return (
    <>
      <HomePageHeader />
      <HomePageContent />
      <div className="mx-5">
        <Row className="g-4">
          {cardsData.map((card) => (
            <Col key={card.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <HomePageCard title={card.title} text={card.text} />
            </Col>
          ))}
        </Row>
      </div>
      <HomePageFooter />
    </>
  );
};

export default HomePage;
