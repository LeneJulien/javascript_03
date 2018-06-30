import React from "react";
import { Layout } from "antd";
import InputMessage from "../components/InputMessage";
import MessageList from "../components/MessageList";
import {store} from "../store/index";

const MessageLayout = props => (
  <Layout style={{ height: "calc(100%)" }}>
    <Layout.Content style={{ padding: "0 50px", height: "calc(80%)" }}>
      <Layout
        style={{
          padding: "24px 0",
          background: "#fff",
          height: "calc(100%)"
        }}
      >
        <Layout.Content style={{ padding: "0 24px", height: "calc(80%)" }}>
          Content
          {MessageList(store.getState().messages)}
        </Layout.Content>
      </Layout>
    </Layout.Content>
    <Layout.Footer
      style={{
        padding: "0 50px",
        textAlign: "center",
        height: "calc(20%)"
      }}
    >
      Write Message
    {InputMessage((messag) => props.submit(messag))}
    </Layout.Footer>

  </Layout>
  );

export default MessageLayout;
