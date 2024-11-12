import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCards } from "../api/fetchCards";
import styled from "styled-components";
import "./CardDisplay.css"


// Styled components for the carousel layout
const CarouselContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;
  text-align: center;
  width: 50%
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
  margin: 1em 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

const ArrowButton = styled.button`
  padding: 0.5em 1em;
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const EditButton = styled.button`
  margin-top: 6em;
  padding: 0.5em 1em;
  background-color: #f1f1f1;
  color: #1e1e1e;
  border: none;
  border-radius: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #1e1e1e;
    color: #f1f1f1
  }
`;

const CounterText = styled.span`
  font-weight: bold;
`;

const LoadingText = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #555;
`;

const NoCardsText = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: red;
`;

const CardDisplay = () => {
  const query = useSelector((state) => state.query);
  const cardData = useSelector((state) => state.query);

  const navigate = useNavigate();
  
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Index for the carousel
  const { nm, cmc, ty, des, po, to, imgUrl } = query; // Extract the imageUrl

  useEffect(() => {
    const fetchCardData = async () => {
      if (!query || Object.values(query).every((value) => !value)) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const fetchedCards = await fetchCards(query); // Fetch cards based on the query
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCardData();
  }, [query]); // Trigger when query changes
  

  if (loading) return <LoadingText>Loading...</LoadingText>;

  if (!cards.length) {
    return (
      <CarouselContainer>
        <NoCardsText>No Cards Found</NoCardsText>
        <EditButton onClick={() => navigate("/")}>Edit Search</EditButton>
      </CarouselContainer>
    );
  }

  // Handler for previous card
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  // Handler for next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const currentCard = cards[currentIndex];

  // Logic to decide when to hide the fields
  const hidePowerAndToughness = cardData.ty === "sorcery" || cardData.ty === "enchantment" || cardData.ty === "instant";
  return (
    <section>
      <h2>Card Search Results</h2>
      <div id="results">
        <div id="generatedCard">
          <h4>Generated Card</h4>
          <div className="cardheader">
            <div>Name: {nm}</div>
              <div>Cost: {cmc}</div>
          </div>
          {imgUrl ? (
              <div>
                <img src={imgUrl} alt="Generated Card" style={{ width: "100%" }} />
              </div>
            ) : (
              <p>No image available</p>
            )
          }
          <div className="cardfooter">
            <div>Type: {ty}</div>
            <div>Description: {des}</div>
            {!(hidePowerAndToughness) && (
              <>
                <div>Po/To: {po}/{to}</div>
              </>
            )}
          </div>
        </div>
        
        <CarouselContainer>
          <h4>Similar Card</h4>
          <div>
            {currentCard.image_uris && currentCard.image_uris.normal && (
              <CardImage src={currentCard.image_uris.normal} alt={currentCard.name} />
            )}
          </div>
          {/* Carousel navigation */}
          <ButtonContainer>
            <ArrowButton onClick={handlePrev}>&#9664; Prev</ArrowButton>
            <CounterText>
              {currentIndex + 1} / {cards.length}
            </CounterText>
            <ArrowButton onClick={handleNext}>Next &#9654;</ArrowButton>
          </ButtonContainer>
        </CarouselContainer>
      </div>
      {/* Edit Search Button */}
      <EditButton onClick={() => navigate("/")}>Edit Search</EditButton>

    </section>
    
  );
};

export default CardDisplay;