import { Form, Input, Modal, Select } from "antd";
import bookingService from "../Services/bookingService";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { ROOM } from "../Redux/Constants/contant";

const BookingModal = ({ isModalOpen, setIsModalOpen, bookingInfor }) => {
  const [form] = Form.useForm();
  const isUpdate = Object.keys(bookingInfor).length > 0;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createBooking = async (body) => {
    try {
      await bookingService.createBooking(body);
      toast.success("booking successfull");
    } catch (error) {
      toast.error("booking failed");
    }
  };

  const updateBooking = async (id, body) => {
    try {
      await bookingService.updateBooking(id, body);
      toast.success("booking sucessfull");
    } catch (error) {
      toast.error("booking failed");
    }
  };

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    if (isUpdate) {
      updateBooking(bookingInfor.id, values);
    } else {
      createBooking(values);
    }
  };

  useEffect(() => {
    if (isUpdate) {
      form.setFieldsValue(bookingInfor);
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingInfor]);

  return (
    <Modal
      title={isUpdate ? "Thay đổi đặt phòng" : "Tạo đặt phòng"}
      onCancel={closeModal}
      open={isModalOpen}
      onOk={handleSubmit}
    >
      <Form form={form}>
        <Form.Item label="Check in" name="checkin">
          <Input allowClear />
        </Form.Item>

        <Form.Item label="Check out" name="checkout">
          <Input allowClear />
        </Form.Item>

        <Form.Item label="Room" name="roomId">
          <Select placeholder="Chọn phòng" allowClear options={ROOM} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingModal;
