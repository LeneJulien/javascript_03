import React from "react";
import { Timeline } from "antd";

const MessageList = (messageList) => (
  <Timeline>
  {messageList.map((message) => (<Timeline.Item> {message.text} </Timeline.Item>))}
  </Timeline>
);

export default MessageList;
