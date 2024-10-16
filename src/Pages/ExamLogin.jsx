import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import withRouter from "../Components/Common/withRouter";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserName: "",
  Password: "",
};

const ExamLogin = () => {
  const { error } = useSelector((state) => ({
    error: state.Login.error,
  }));

  const [show, setShow] = useState(true);
  const [values, setValues] = useState(initialState);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

const handleSubmit = () => {
  setIsSubmit(true);
  const errors = validate(values);
  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    setLoading(true); // Start loading
    axios
      .post(`${process.env.REACT_APP_API_URL_BPC}/api/ExamUserLogin`, values)
      .then((res) => {
        setLoading(false); // Stop loading on successful response
        if (res.data.isOk) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.data._id); // Store the JWT token
          window.location.replace("/examDashBoard");
        } else {
          toast.error("Authentication failed!");
          setValues(initialState);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Authentication failed!");
        setLoading(false); // Stop loading on error
      });
  } else {
    setLoading(false); // Stop loading if validation fails
  }
};


  const validate = (values) => {
    const errors = {};
    if (!values.UserName) {
      errors.UserName = "User Name is required!";
    }
    if (!values.Password) {
      errors.Password = "Password is required!";
    }
    return errors;
  };

  const validClassEmail =
    formErrors.UserName && isSubmit
      ? "form-control is-invalid"
      : "form-control";
  const validClassPassword =
    formErrors.Password && isSubmit
      ? "form-control is-invalid"
      : "form-control";

  return (
    <div>
      <ToastContainer />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        className="custom-modal"
      >
        <Modal.Header>
          <Modal.Title className="text-center w-100">
            Welcome to BPC Exam Portal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                User Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="UserName"
                value={values.UserName}
                onChange={handleChange}
                className={validClassEmail}
                disabled={loading} // Disable input during loading
              />
              {formErrors.UserName && (
                <div className="invalid-feedback">{formErrors.UserName}</div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                name="Password"
                value={values.Password}
                onChange={handleChange}
                className={validClassPassword}
                disabled={loading} // Disable input during loading
              />
              {formErrors.Password && (
                <div className="invalid-feedback">{formErrors.Password}</div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={loading} // Disable button during loading
          >
            {loading ? "Submitting..." : "Submit Now"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(ExamLogin);
