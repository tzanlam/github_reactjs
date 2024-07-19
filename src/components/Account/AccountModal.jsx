/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";
import { DEPARTMENT_OPTIONS, ROLE_OPTIONS } from "../../utils/constants";
import acountService from "../../services/acountService";
import { toast } from "react-toastify";

const AccountModal = ({
  isModalOpen,
  setIsModalOpen,
  getAllAccounts,
  accountInfo,
}) => {
  const [form] = Form.useForm();
  const isUpdate = Object.keys(accountInfo).length > 0;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createAccount = async (body) => {
    try {
      await acountService.create(body); // call API create
      toast.success("Thêm mới account thành công!"); // show thông báo
      closeModal(); // đóng modal
      getAllAccounts(); // call API getAll để lấy dữ liệu mới nhất về sau đi thêm mới thành công
    } catch (error) {
      toast.error("Thêm mới account thất bại!"); // show thông báo khi lỗi
    }
  };

  const updateAccount = async (id, body) => {
    try {
      await acountService.update(id, body);
      toast.success("update success");
      closeModal();
      getAllAccounts();
    } catch (error) {
      toast.error("update fail");
    }
  };

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    if (isUpdate) {
      updateAccount(accountInfo.id, values);
    } else {
      createAccount(values);
    }
  };

  useEffect(() => {
    if (isUpdate) {
      form.setFieldsValue(accountInfo);
    } else {
      form.resetFields();
    }
  }, [accountInfo]);

  return (
    <Modal
      title={isUpdate ? "Update Account" : "Create new account"}
      open={isModalOpen}
      onCancel={closeModal}
      onOk={handleSubmit}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="UserName" name="username">
          <Input allowClear />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input allowClear />
        </Form.Item>

        <Form.Item label="FullName" name="fullName">
          <Input allowClear />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            options={ROLE_OPTIONS}
          />
        </Form.Item>

        <Form.Item label="Department" name="departmentId">
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            options={DEPARTMENT_OPTIONS}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AccountModal;
