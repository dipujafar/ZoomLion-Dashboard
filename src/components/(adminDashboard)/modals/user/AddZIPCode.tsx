import { Avatar, Button, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
    open: boolean;
    setOpen: (collapsed: boolean) => void;
    typeUser: string;
};

const AddZIPCode = ({ open, setOpen }: TPropsType) => {
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
                <div className="flex justify-between items-center mb-2 ">
                    <div>
                        <h2 className="text-2xl">Add ZIP Code</h2>
                    </div>
                    <div
                        className="w-10 h-10 bg-[#FF00001A]/10  rounded-full flex justify-center items-center cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <RiCloseLargeLine size={18} color="#E12728" className="" />
                    </div>
                </div>
                <hr />
                <div>
                    <form onClick={(e) => e.preventDefault()}>
                        <div className="mt-5 space-y-4">
                            <div>

                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Area Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Zone"
                                />
                            </div>
                            <div>

                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    ZIP Code
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Zone"
                                />
                            </div>
                            <Button
                                type="primary"
                                size="large"
                                className="mt-5 w-full"
                                htmlType="submit"
                            >
                                Add zip code
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AddZIPCode;
