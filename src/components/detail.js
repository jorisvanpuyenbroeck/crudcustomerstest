import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import MockApi from "../apis/mock_api";

export default function Detail() {
  var [customer, setCustomer] = useState({
    firstName: "Joris",
    lastName: "Van Puyenbroeck",
    iAgree: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id != 0) {
      customer = getCustomer(id);
    }
  }, [id]);


  const getCustomer = async (id) => {
    // setLoading(true);
    try {
      const result = await MockApi.getbyid(id);
      setCustomer(result.data);
    } catch (error) {
      console.log("Something went wrong with the Mock API.");
    }
    // setLoading(false);
  };

  const submitCustomer = async () => {

    console.log(id);
    if (id == 0) {
      await MockApi.post(customer);
    } else {
      await MockApi.put(customer);
    }
    navigate(-1);
  }


  function handleFirstNameChange(event) {
    setCustomer({
      ...customer,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setCustomer({
      ...customer,
      lastName: event.target.value,
    });
  }

  function handleIAgreeChange() {
    setCustomer({
      ...customer,
      iAgree: !customer.iAgree,
    });
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            onChange={handleFirstNameChange}
            placeholder="First Name"
            value={customer.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            onChange={handleLastNameChange}
            placeholder="Last Name"
            value={customer.lastName}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            onChange={handleIAgreeChange}
            label="I agree to the Terms and Conditions"
            value={customer.iAgree}
          />
        </Form.Field>
        <Button onClick={submitCustomer} type="button">
          {(id !== "0" ) && <>Update</>}
          {(id === "0" ) && <>Add</>}
        </Button>
      </Form>
    </div>
  );
}
