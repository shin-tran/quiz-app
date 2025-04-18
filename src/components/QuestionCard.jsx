import React, { useState } from "react";
import { Card, Radio, Space, Typography } from "antd";

const { Title, Text } = Typography;

/**
 * Component hiển thị một câu hỏi và các lựa chọn
 * @param {Object} props - Props của component
 * @param {Object} props.question - Đối tượng chứa thông tin câu hỏi
 * @param {function} props.onAnswerSelected - Callback khi người dùng chọn câu trả lời
 * @param {number} props.questionNumber - Số thứ tự của câu hỏi
 * @param {string} props.selectedAnswer - Câu trả lời đã chọn (nếu có)
 */
const QuestionCard = ({
  question,
  onAnswerSelected,
  questionNumber,
  selectedAnswer
}) => {
  const [value, setValue] = useState(selectedAnswer || null);

  const onChange = (e) => {
    setValue(e.target.value);
    onAnswerSelected(question.id, e.target.value);
  };

  if (!question) return null;

  return (
    <Card
      title={`Câu hỏi ${questionNumber}: ${question.text}`}
      style={{ width: "100%", marginBottom: 16 }}
    >
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{ width: "100%" }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          {question.options.map((option) => (
            <Radio key={option.id} value={option.id} style={{ width: "100%", padding: "8px" }}>
              {option.text}
            </Radio>
          ))}
        </Space>
      </Radio.Group>

      {question.imageUrl && (
        <div style={{ marginTop: 16 }}>
          <img
            src={question.imageUrl}
            alt="Question visual"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;
