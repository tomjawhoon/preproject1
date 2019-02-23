import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class Header1 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
        <div class="bg-primary text-white mt-4">
          <Label for="รหัสนักศึกษา">รหัสนักศึกษา</Label>
          <Input type="รหัสนักศึกษา" name="รหัสนักศึกษา" id="รหัสนักศึกษา" placeholder="" />
          </div>
        </FormGroup>

        <FormGroup>
        <div class="bg-primary text-white mt-4">
          <Label for="ชื่อ-นามสกุล">ชื่อ-นามสกุล</Label>
          <Input type="ชื่อ-นามสกุล" name="ชื่อ-นามสกุล" id="ชื่อ-นามสกุล" placeholder="" />
        </div>
        </FormGroup>

        <FormGroup>
        <div class="bg-primary text-white mt-4">
          <Label for="Address Metamask">Address Metamask</Label>
          <Input type="Address Metamask" name="Address Metamask" id="Address Metamask" placeholder="" />
          </div>
        </FormGroup>

        <Button>Submit</Button>

      </Form>
    );
  }
}