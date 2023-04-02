import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  //   form handling
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <div className="filters">
        <div>Range Filters</div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="content"></div>
      <Modal
        title="Add Transaction"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount" required={true}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type" required={true}>
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expenditure">Expenditure</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category" required={true}>
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="entertainment">Entertainment</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="fee">Fees</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description" required={true}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Date" name="date" required={true}>
            <Input type="date" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
