import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Space, InputNumber } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./RegistrationForm.css";
import axios from "axios";

const RegistrationForm = ({ email, eventName, eventId, strength }) => {
  const userId = localStorage.getItem("uid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedFields, setAddedFields] = useState(1);
  const [regData, setRegData] = useState({ userid: userId, eventid: eventId });

  useEffect(() => {}, [regData]); // Add regData as a dependency

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const jwtToken = localStorage.getItem("zftoken");

  const config = {
    headers: {
      jwt: jwtToken,
      "Content-Type": "application/json", // Set the content type if needed
    },
  };

  const onFinish = async (values) => {
    let updatedRegData = {};
    if (strength > 1) {
      updatedRegData = {
        ...regData,
        participant1email: values.participantemail,
        participant1name: values.participantname,
        participant1phone: values.participantphone,
        course: values.course,
        college: values.college,
        participant2name: values.members?.[0]?.participant1name || "",
        participant2phone: values.members?.[0]?.participant1phone || "",
        participant3name: values.members?.[1]?.participant2name || "",
        participant3phone: values.members?.[1].participant2phone || "",
        participant4name: values.members?.[2]?.participant3name || "",
        participant4phone: values.members?.[2]?.participant3phone || "",
        participant5name: values.members?.[3]?.participant4name || "",
        participant5phone: values.members?.[3]?.participant4phone || "",
      };
      await axios
        .post(
          "https://main--prismatic-licorice-09766e.netlify.app/v1/api/events/group",
          updatedRegData,
          config
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("successfull");
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 400) {
            console.log("already exist");
          }
        });
    } else {
      updatedRegData = {
        ...regData,
        participantemail: values.participantemail,
        participantname: values.participantname,
        participantphone: values.participantphone,
        course: values.course,
        college: values.college,
      };
      await axios
        .post(
          "https://main--prismatic-licorice-09766e.netlify.app/v1/api/events/single",
          updatedRegData,
          config
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("successfull");
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 400) {
            console.log("already exist");
          }
        });
    }
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
          <Form.Item name="participantemail" initialValue={email}>
            <Input className="register-fields" disabled />
          </Form.Item>
          <Form.Item name="participantname">
            <Input
              className="register-fields"
              placeholder="Full Name"
              required
            />
          </Form.Item>
          <Form.Item name="participantphone">
            <Input
              className="register-fields"
              placeholder="Phone number"
              type="number"
              required
            />
          </Form.Item>
          <Form.Item name="college">
            <Input
              className="register-fields"
              placeholder="College Name"
              required
            />
          </Form.Item>
          <Form.Item name="course">
            <Input className="register-fields" placeholder="Course" required />
          </Form.Item>

          <Form.List name="members">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
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
                      name={[name, "participant" + (index + 1) + "name"]}
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
                      name={[name, "participant" + (index + 1) + "phone"]}
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
                {addedFields < strength && (
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
