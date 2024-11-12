import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { fetchRandomImage } from "../api/fetchRandomImage"; // Import the random image fetch functionimport axios from "axios";
import styled from "styled-components";
import "./CardForm.css"

// Styled components for the form layout
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
  max-width: 640px;
  margin: auto;
`;

const Label = styled.label`
  font-weight: bold;
  width:50%
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #ccc;
  max-width: 50%;
`;

const Button = styled.button`
  padding: 1em 2em;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 24px;
  font-weight: bold;
  width: 128px;
  &:hover {
    background-color: #555;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
  margin-top: 1em;
`;

const CardForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get saved search query from Redux state
  const savedQuery = useSelector((state) => state.searchQuery?.query) || {};

  const [cardData, setCardData] = useState({
    nm: "",
    cmc: "",
    ty: "",
    des: "",
    po: "",
    to: "",
    imgUrl: "",
  });
  
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      cost: "",
      description: "",
      power: "",
      toughness: ""
    },
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values); // Log the values

      const updatedValues = { ...values, ...cardData };
      dispatch(setQuery(updatedValues)); // Optional: store the search query in redux
      navigate("/card-display");
    },
  });

  // Function to fetch a random image from the Scryfall API
  const handleFetchRandomImage = async () => {
    try {
      const data = await fetchRandomImage();
      setCardData(data); // Store the card data (including image) in state
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const clearForm = () => {
    // Get all input elements inside the form
    const inputs = document.querySelectorAll('form input, form textarea');

    // Loop through each input and reset its value
    inputs.forEach(input => {
        input.value = '';  // Clear the value
    });
}

  const cardTypes = ["", "lands", "creature", "enchantment", "instant", "sorcery"];

  // Logic to decide when to hide the fields
  const hidePowerAndToughness = formik.values.type === "sorcery" || formik.values.type === "enchantment" || formik.values.type === "instant";

  return (
    <section>
      <h2>Search</h2>
      <FormContainer onSubmit={formik.handleSubmit}>

        <div id="formHeader">
          <Input id="name" name="name" type="text" placeholder="Card Name" 
            value={formik.values.name} onChange={formik.handleChange}/>

          <Select id="type" name="type" 
            value={formik.values.type} onChange={formik.handleChange}>
            {(() => {
              let options = [];
              for (let i = 0; i < cardTypes.length; i++) {
                options.push(
                  <option key={cardTypes[i]} value={cardTypes[i]}>
                    {cardTypes[i] || "Select Type"}
                  </option>
                );
              }
              return options;
            })()}
          </Select>

          <Input id="cost" name="cost" type="number" placeholder="Converted Mana Cost (CMC)"
              value={formik.values.cost} onChange={formik.handleChange}/>
        </div>
        
        <div id="img">
          <div>
            <Label>Image</Label>
            {cardData.imgUrl && <CardImage src={cardData.imgUrl} alt="Card Preview" />}
          </div>
          <Button type="button" onClick={handleFetchRandomImage}>New Image</Button>
        </div>

        <div id="formFooter">
          <Input id="description" name="description" type="text" placeholder="Keyword(s)"
            value={formik.values.description} onChange={formik.handleChange}/>
          
          {!(hidePowerAndToughness) && (
            <>
              <Input id="power" name="power" type="number" placeholder="Power"
                value={formik.values.power} onChange={formik.handleChange}/>

              <Input id="toughness" name="toughness" type="number" placeholder="Toughness"
                value={formik.values.toughness} onChange={formik.handleChange}/>
            </>
          )}
        </div>
        <div id="btns">
          <Button type="button" onClick={clearForm}>Clear</Button>
          <Button type="submit">Search</Button>
        </div>
      </FormContainer>
    </section>
  );
};

export default CardForm;