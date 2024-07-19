/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import accountService from "../../services/acountService";
import AccountModal from "../../components/Account/AccountModal";
/**
 * B1: tạo 1 state lưu trữ giá trị của bản ghi muốn update (gọi là X)
 * B2: click vào button Update => set X = record của bản ghi click trong hàng
 * B3: mở modal
 * B4: fill dữ liệu từ X vào form trong Modal
 * B5: sửa và click Ok thì call API update
 */

const AccountPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1);
  const [total, setTotal] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onCreateAccount = () => {
    showModal();
    setAccountInfo({});
  };

  const deleteAccount = async (id) => {
    try {
      await accountService.delete(id); // call API delete
      toast.success("Xóa account thành công!"); // show thông báo
      getAllAccounts(); // call API getAll để lấy dữ liệu mới nhất về sau đi xóa thành công
    } catch (error) {
      toast.error("Xóa account thất bại!"); // show thông báo khi lỗi
    }
  };

  const onUpdateAccount = (record) => {
    setAccountInfo(record);
    showModal();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "UserName",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (department) => department ? department.name : "null"
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <Space>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => onUpdateAccount(record)}
            >
              Update
            </Button>
            <Popconfirm // => component hỏi người dùng có muốn xóa ko
              title="Delete the task" // tự sửa text
              description="Are you sure to delete this task?" // tự sửa text
              onConfirm={() => deleteAccount(record.id)}
            >
              <Button type="primary" danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const getAllAccounts = async () => {
    try {
      const { data } = await accountService.getAll(page - 1, size);
      setTotal(data.totalElements);
      setDataSource(data.content);
    } catch (error) {
      console.log("Error!");
    }
  };

  useEffect(() => {
    getAllAccounts();
  }, [page, size]);

  const handlePaginationChange = (newPage, newSize) => {
    setPage(newPage);
    setSize(newSize);
  };

  return (
    <div>
      <Button
        onClick={onCreateAccount}
        type="primary"
        icon={<PlusCircleOutlined />}
        size="large"
        style={{ marginBottom: 15 }}
      >
        Create new account
      </Button>
      <AccountModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        getAllAccounts={getAllAccounts}
        accountInfo={accountInfo}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          current: page,
          pageSize: size,
          showSizeChanger: true,
          pageSizeOptions: [1, 2],
          onChange: handlePaginationChange,
          total,
        }}
      />
    </div>
  );
};

export default AccountPage;
