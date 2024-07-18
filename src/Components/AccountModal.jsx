import React, { useEffect } from "react";
import { Form, Input, InputNumber, Modal } from "antd";
import AccountService from "../Services/accountService";
import { toast } from 'react-toastify';
const AccountModal = ({
  isModalOpen,
  setIsModalOpen,
  accountInfor,
}) => {
  const [form] = Form.useForm();
  const isUpdate = Object.keys(accountInfor).length > 0;

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const createAccount = async (body) => {
    try {
      await AccountService.createAccount(body);
      toast.success("Successfull");
    } catch (error) {
      toast.error("Failed");
    }
  };

  const updateAccount = async (id, body) => {
    try {
      await AccountService.updateAccount(id, body);
      toast.success("Updated");
    } catch (error) {
      toast.error("Failed");
    }
  };

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    if (isUpdate) {
      updateAccount(accountInfor.id, values);
    } else {
      createAccount(values);
    }
  };

  useEffect(() => {
    if (isUpdate) {
      form.setFieldsValue(accountInfor);
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountInfor]);
  return (
    <Modal
      title={isUpdate ? "Thay đổi tài khoản" : "Đăng kí"}
      open={isModalOpen}
      onCancel={hideModal}
      onOk={handleSubmit}
    >
      <Form form={form}>
        <Form.Item label="Username" name="username">
          <Input allowClear />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input allowClear />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input allowClear />
        </Form.Item>
        <Form.Item label="FullName" name="fullname">
          <Input allowClear />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AccountModal;
