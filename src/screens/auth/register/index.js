import React, { Fragment } from 'react';
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
import LogoImage from '../../../assets/images/logo.png';
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";

const RegisterScreen = () => (
  <Fragment>
    <Header/>
    <Section className="auth sectionAuth">
      <Container id="containerRegister">
        <Column.Group centered>
          <Column size={4}>
            <Card>
              <Card.Content>
                <Section id="sec">
                  <Column.Group centered className="full">
                    <Column size={12}>
                      <img src={LogoImage}/>
                    </Column>
                  </Column.Group>

                  <Column.Group className="full">
                    <Column size={12}>
                      <Title size={6} className="has-text-grey has-text-centered">
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                  <RegisterForm/>
                </Section> 
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default RegisterScreen;