import React from "react";
import { Col, Row, Slider } from "antd";

interface SliderProps {
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const ModelSlider: React.FC<SliderProps> = ({
  max = 1,
  min = 0,
  step = 0.01,
  value,
  onChange,
}) => {
  return (
    <Row>
      <Col span={24}>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default ModelSlider;
