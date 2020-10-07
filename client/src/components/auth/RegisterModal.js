import React, { useState, useEffect } from 'react';
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
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

export const RegisterModal = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const auth = useSelector(state => state.auth);

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMessage(error.msg.msg);
    } else {
      setMessage(null);
    }
  }, [error]);

  useEffect(() => {
    if (modal && auth.isAuthenticated) {
      dispatch(clearErrors());
      setModal(!modal);
    }
  }, [auth, modal, dispatch]);

  const toggle = () => {
    dispatch(clearErrors());
    setModal(!modal);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('Onclick pressed');
    const newUser = { name, email, password };
    dispatch(register(newUser));
  };

  return (
    <div>
      <NavLink onClick={toggle}>Register</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {message ? <Alert color="danger">{message}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                autoComplete="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={e => setName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                autoComplete="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={e => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                autoComplete="off"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={e => setPassword(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
