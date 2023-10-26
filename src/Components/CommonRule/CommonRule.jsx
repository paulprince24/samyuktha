import { List } from "antd";
import "./commonrule.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
function CommonRule() {
  const data = [
    "- Only students enrolled in non-engineering courses are eligible to participate in the event.",
    "- Participants are required to present a valid student ID card or any official proof from the department. Failure to provide proof may result in disqualification.",
    "- The decision of the judges for each event is final and binding. No appeals or disputes regarding the judges' decisions will be entertained.",
    "We kindly urge all prospective participants to thoroughly understand and commit to abiding by these rules. Their adherence is vital to ensure a fair and harmonious event while upholding the event's integrity.",
  ];
  return (
    <div className="d-flex align-items-center justify-content-center rule-ctn">
      <div
        className="rule_card rounded-9 m-3 p-3"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <List
          className="rule-box "
          size="small"
          header={
            <div className="header-info">
              <img
                src="https://i.imgur.com/z1sM4My.png"
                alt="png"
                className="pumpkin-rule"
              />
              <p
                className="text-warning"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Mandatory rules to follow
              </p>
            </div>
          }
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="text-warning">{item}</List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default CommonRule;
