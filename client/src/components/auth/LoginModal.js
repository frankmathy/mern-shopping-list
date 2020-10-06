import React, { useState, useEffect, Fragment } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

export const LoginModal = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const auth = useSelector(state => state.auth);

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setMessage(error.msg.msg);
    } else {
      setMessage(null);
    }
  }, [error]);

  useEffect(() => {
    if (modal && auth.isAuthenticated) {
      toggle();
    }
  }, [auth, modal]);

  const toggle = () => {
    dispatch(clearErrors());
    setModal(!modal);
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    dispatch(login(user));
  };

  return (
    <div>
      <NavLink onClick={toggle}>Login</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          {message ? <Alert color="danger">{message}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={e => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={e => setPassword(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
