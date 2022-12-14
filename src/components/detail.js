// import { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

// import MockApi from '../apis/mock_api';
// import { useNavigate} from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export default function Detail() {

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='button'>
          Submit
          </Button>
      </Form>
    </div>
  )
}
