import { Avatar, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import { RiderInfoCard } from "./RiderInfoCard";
import { RequiredDocuments } from "./RequiredDocuments";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const RiderApproveModal = ({ open, setOpen }: TPropsType) => {
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

        {/* --------------------- rider details information ---------------------------- */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-[#1A1A1A]">Review Rider Documents</h1>
            <p className="text-lg text-[#898989]">Review documents for Cleopas Owusu</p>
          </div>

          <div className="space-y-6">
            <RiderInfoCard
              fullName="Cleopas Owusu"
              location="Accra, Ghana"
              phoneNumber="+233-30-8749352"
              submissionDate="12/12/2025"
            />

            <RequiredDocuments />
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button className="bg-[#D4183D] hover:bg-[#B00E3D] text-white px-8 h-12 rounded-lg flex items-center gap-2 text-base font-semibold transition-colors">
              <X className="w-5 h-5" />
              Reject
            </Button>
            <Button className="bg-[#00A63E] hover:bg-[#008F41] text-white px-8 h-12 rounded-lg flex items-center gap-2 text-base font-semibold transition-colors">
              <Check className="w-5 h-5" />
              Approve
            </Button>
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default RiderApproveModal;
