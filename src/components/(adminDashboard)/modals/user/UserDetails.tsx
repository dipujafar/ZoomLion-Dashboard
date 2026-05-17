import {  Image, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  typeUser: string;
};

const UserDetails = ({ open, setOpen, typeUser }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
      }}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center  ">
          <div></div>
          <div
            className="w-10 h-10 bg-[#FF00001A]/10  rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#E12728" className="" />
          </div>
        </div>

        {/* --------------------- user details information ---------------------------- */}
        <div className="w-fit mx-auto">
          <Image src="/user_image.png" alt="user image" className="!w-36 !h-36 rounded-full" />
        </div>

        <div className="mt-5">
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>User name :</h4>
            <p className="font-medium">Cleopas Owusu</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Email :</h4>
            <p className="font-medium">cleopasowusu@gmail.com</p>
          </div>
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Contact Number :</h4>
            <p className="font-medium">+233-30-8749352</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Location :</h4>
            <p className="font-medium">Accra, Ghana</p>
          </div>
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Account Type :</h4>
            <p className="font-medium">{typeUser}</p>
          </div>
          <div className="flex justify-between  py-3 px-2">
            <h4>Date of Join :</h4>
            <p className="font-medium">11 Sep, 2025</p>
          </div>
          <div className="flex justify-between items-center bg-[#ECF2F0]  py-3 px-2">
            <h4>Status :</h4>
            <p className="font-medium text-[#24983F] bg-[#EAF6EC] px-4 py-1 border border-[#24983F] rounded-md">Active</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
