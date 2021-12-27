import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label, Notification } from "rbx";
import { useNavigate } from "react-router-dom";
import UsersService from "../../../services/users";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);
    const [createAccountTrue, setCreateAccountTrue] = useState(false);
    let navigate = useNavigate();

    const HandleSubmit = async(evt) => {
        evt.preventDefault();
        try{
            const users = await UsersService.register({name: name, email: email,password: password});
            setCreateAccountTrue(true);
            setTimeout(() => setRedirectToLogin(true), 4000);
            
        }catch(error){
            setError(true)
        }
    }

    if(redirectToLogin)
        navigate("/login");

    return (
      <Fragment>
          <Column.Group centered>
            <form onSubmit={HandleSubmit}>
              <Column size={12}>
                <Field>
                  <Label size="small">Name:</Label>
                  <Control>
                    <Input 
                      type="name"
                      required
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">Email:</Label>
                  <Control>
                    <Input 
                      type="email" 
                      required
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">Password:</Label>
                  <Control>
                    <Input 
                      type="password" 
                      required
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Column.Group breakpoint="mobile">
                      <Column>
                        <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">
                            Login or
                        </a>
                      </Column>
                      <Column>
                        <Button color="custom-purple" outlined>Register</Button>
                      </Column>
                    </Column.Group>
                  </Control>
                </Field>
                { createAccountTrue && <Notification color="success">Account created successfully</Notification>}
                { error && <Help color="danger">Email or Password invalid</Help> }
              </Column>
            </form>
          </Column.Group>
      </Fragment>
    )
}

export default RegisterForm;