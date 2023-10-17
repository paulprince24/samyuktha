import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, InputNumber } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./RegistrationForm.css";
import { useForm } from "antd/es/form/Form";
import { updateDoc, doc, getFirestore } from "firebase/firestore";
import firebase from "../../../Firebase/Config";

const RegistrationForm = ({ email, eventName, eventId, strength }) => {
  const form = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedFields, setAddedFields] = useState(1); // Initialize with 1 field

  const db = getFirestore(firebase);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const documentRef = doc(db, "events", eventId);
    const uid = localStorage.getItem("uid");

    if (
      (values.members && values.members.length === 0) ||
      values.members === undefined
    ) {
      values.members = null;
    }
    const participantData = {
      [uid]: values,
    };

    // Update the "participants" field in the Firestore document.
    await updateDoc(documentRef, {
      participants: participantData,
    });
    console.log("Received values of form:", values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" className="custom_button" onClick={showModal}>
        Register for event
      </Button>
      <Modal
        className="modal_ctn"
        title="Registration"
        visible={isModalOpen} // Change 'open' to 'visible'
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: "custom-ok-button" }}
        cancelButtonProps={{ className: "custom-cancel-button" }}
      >
        <Form
          className="pt-3"
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <Form.Item name="event_name" initialValue={eventName}>
            <Input className="register-fields" disabled />
          </Form.Item>
          <Form.Item name="logged_email" initialValue={email}>
            <Input className="register-fields" disabled />
          </Form.Item>
          <Form.Item name="participant_one">
            <Input className="register-fields" placeholder="Full Name" />
          </Form.Item>
          <Form.Item name="phone">
            <Input
              className="register-fields"
              placeholder="Phone number"
              type="number"
            />
          </Form.Item>
          <Form.Item name="college">
            <Input className="register-fields" placeholder="College Name" />
          </Form.Item>
          <Form.Item name="course">
            <Input className="register-fields" placeholder="Course" />
          </Form.Item>

          <Form.List name="members">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "memberName"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="First Name"
                        className="register-fields"
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "member_phone"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Phone number"
                        className="register-fields"
                        type="number"
                      />
                    </Form.Item>
                    <MinusCircleOutlined
                      className="minus"
                      onClick={() => {
                        remove(name);
                        setAddedFields(addedFields - 1);
                      }}
                    />
                  </Space>
                ))}
                {addedFields < strength && ( // Allow adding fields up to 3
                  <Form.Item>
                    <Button
                      className="add-btn"
                      type="dashed"
                      onClick={() => {
                        add();
                        setAddedFields(addedFields + 1);
                      }}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Team Members
                    </Button>
                  </Form.Item>
                )}
              </>
            )}
          </Form.List>
          <Form.Item>
            <center>
              <Button type="primary" className="reg-btn" htmlType="submit">
                Register
              </Button>
            </center>
          </Form.Item>
          <div>
            <img
              src="https://i.imgur.com/z1sM4My.png"
              alt="png"
              className="pumpkin-reg"
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default RegistrationForm;
