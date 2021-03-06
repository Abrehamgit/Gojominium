import React, { Component } from "react";
import { Modal, Button, Spin } from "antd";
import "../../Login_SignUp/Login_Modal.css";

class ConfirmDeleteModal extends Component {
  render() {
    return (
      <div>
        <Modal
          title="Are you sure?"
          centered
          visible={this.props.isModalVisible}
          onOk={() => this.props.setModalVisible(false)}
          onCancel={() => this.props.setModalVisible(false)}
          maskClosable={false}
          destroyOnClose={true}

        >
          {
            <div className="text-center mb-3">
              <Button
                disabled={this.props.isLoading}
                onClick={() => {
                  this.props.handleDelete(this.props.condoId);
                }}
                style={{
                  backgroundColor: "#c62828",
                  color: "rgba(255,255,255,0.8)"
                }}
              >
                {" "}
                Delete{" "}
              </Button>{" "}
              <Spin spinning={this.props.deleteLoading} className="ml-1 mr-4" />
              <Button
                onClick={() => {
                  this.props.setModalVisible(false);
                }}
                disabled={this.props.deleteLoading}
              >
                {" "}
                Cancel{" "}
              </Button>
            </div>
          }
        </Modal>
      </div>
    );
  }
}

export default ConfirmDeleteModal;

{
  /*  */
}
