import React from "react";
import {
  TextWrapper,
  MerchandasingContainer,
  MerchandasingWrapper,
  MerchandasingGrid,
  MerchandasingRow,
  MerchandasingCard,
  Header,
  ProductImgWrapper,
  ProductPrice,
  ProductText,
  BuyButton,
} from "./MerchandasingElement";

import { MerchandasingData as Data } from "./Data";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { FormGroup, Label, Input } from "reactstrap";

class Merchandasing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameworkCamiseta: 1,
      frameworkGorra: "negra",
      frameworkMochila: 1,
      frameworkTaza: "negra",
    };
  }

  carouselControl = (e) => {
    e.preventDefault();
  };

  handleCamisetaChange = (e) => {
    this.setState({ frameworkCamiseta: e.target.value });
  };

  handleTazaChange = (e) => {
    this.setState({ frameworkTaza: e.target.value });
  };

  handleMochilaChange = (e) => {
    this.setState({ frameworkMochila: e.target.value });
  };

  handleGorraChange = (e) => {
    this.setState({ frameworkGorra: e.target.value });
  };

  render() {
    return (
      <>
        <MerchandasingContainer id="merchandising">
          <MerchandasingWrapper>
            <TextWrapper>
              <Header>Merchandising</Header>
            </TextWrapper>
            <MerchandasingGrid>
              <MerchandasingRow>
                <MerchandasingCard>
                  <Carousel interval={null} centerMode={true} controls={false}>
                    <Carousel.Item>
                      <ProductImgWrapper
                        src={Data.imgCamisetaFront}
                        alt={Data.altCamisetFront}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <ProductImgWrapper
                        src={Data.imgCamisetaBack}
                        alt={Data.altCamisetBack}
                      />
                    </Carousel.Item>
                  </Carousel>
                  <FormGroup
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0px",
                    }}
                  >
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="camiseta-negra"
                        type="radio"
                        value="1"
                        checked={
                          this.state.frameworkCamiseta === 1 ? true : false
                        }
                        onChange={this.handleCamisetaChange}
                      ></Input>
                      <Label
                        for="camiseta-negra"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        Black
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <ProductText>{Data.camisetaText}</ProductText>
                  <ProductPrice>{Data.camisetaPrecio}</ProductPrice>
                  <BuyButton>{Data.purchaseText}</BuyButton>
                </MerchandasingCard>
                <MerchandasingCard>
                  <Carousel
                    interval={null}
                    centerMode={true}
                    controls={false}
                    variant={"dark"}
                  >
                    <Carousel.Item>
                      <ProductImgWrapper
                        src={require("../../images/taza_delante_" +
                          this.state.frameworkTaza +
                          ".jfif")}
                        alt={Data.altCamisetBack}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <ProductImgWrapper
                        src={require("../../images/taza_lado_" +
                          this.state.frameworkTaza +
                          ".jfif")}
                        alt={Data.altCamisetBack}
                      />
                    </Carousel.Item>
                  </Carousel>
                  <FormGroup
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="taza-negra"
                        type="radio"
                        value="negra"
                        checked={
                          this.state.frameworkTaza === "negra" ? true : false
                        }
                        onChange={this.handleTazaChange}
                      ></Input>
                      <Label
                        for="taza-negra"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        Black
                      </Label>
                    </FormGroup>
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="taza-azul"
                        type="radio"
                        value="azul"
                        checked={
                          this.state.frameworkTaza === "azul" ? true : false
                        }
                        onChange={this.handleTazaChange}
                      ></Input>
                      <Label
                        for="taza-azul"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        Blue
                      </Label>
                    </FormGroup>
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="taza-blanca"
                        type="radio"
                        value="blanca"
                        checked={
                          this.state.frameworkTaza === "blanca" ? true : false
                        }
                        onChange={this.handleTazaChange}
                      ></Input>
                      <Label
                        for="taza-blanca"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        White
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <ProductText>{Data.tazaText}</ProductText>
                  <ProductPrice>{Data.tazaPrecio}</ProductPrice>
                  <BuyButton>{Data.purchaseText}</BuyButton>
                </MerchandasingCard>
              </MerchandasingRow>
              <MerchandasingRow>
                <MerchandasingCard>
                  <Carousel interval={null} centerMode={true} controls={false}>
                    <Carousel.Item>
                      <ProductImgWrapper
                        src={require("../../images/gorra_" +
                          this.state.frameworkGorra +
                          ".PNG")}
                        alt={Data.altGorra}
                      />
                    </Carousel.Item>
                  </Carousel>
                  <FormGroup
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="gorra-negra"
                        type="radio"
                        value="negra"
                        checked={
                          this.state.frameworkGorra === "negra" ? true : false
                        }
                        onChange={this.handleGorraChange}
                      ></Input>
                      <Label
                        for="gorra-negra"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        Black
                      </Label>
                    </FormGroup>
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="gorra-azul"
                        type="radio"
                        value="azul"
                        checked={
                          this.state.frameworkGorra === "azul" ? true : false
                        }
                        onChange={this.handleGorraChange}
                      ></Input>
                      <Label
                        for="gorra-azul"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        Blue
                      </Label>
                    </FormGroup>
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="gorra-blanca"
                        type="radio"
                        value="blanca"
                        checked={
                          this.state.frameworkGorra === "blanca" ? true : false
                        }
                        onChange={this.handleGorraChange}
                      ></Input>
                      <Label
                        for="gorra-blanca"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        White
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <ProductText>{Data.gorraText}</ProductText>
                  <ProductPrice>{Data.gorraPrecio}</ProductPrice>
                  <BuyButton>{Data.purchaseText}</BuyButton>
                </MerchandasingCard>
                <MerchandasingCard>
                  <Carousel interval={null} centerMode={true} controls={false}>
                    <Carousel.Item>
                      <ProductImgWrapper
                        src={require("../../images/mochila_negra.PNG")}
                        alt={Data.altGorra}
                      />
                    </Carousel.Item>
                  </Carousel>
                  <FormGroup
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FormGroup
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <Input
                        id="mochila-negra"
                        type="radio"
                        value="1"
                        checked={
                          this.state.frameworkMochila === 1 ? true : false
                        }
                        onChange={this.handleMochilaChange}
                      ></Input>
                      <Label
                        for="mochila-negra"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Trebuchet MS",
                          marginLeft: "5px",
                        }}
                      >
                        Black
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <ProductText>{Data.bolsaText}</ProductText>
                  <ProductPrice>{Data.bolsaPrecio}</ProductPrice>
                  <BuyButton>{Data.purchaseText}</BuyButton>
                </MerchandasingCard>
              </MerchandasingRow>
            </MerchandasingGrid>
          </MerchandasingWrapper>
        </MerchandasingContainer>
      </>
    );
  }
}

export default Merchandasing;
