"use client";;
import { Modal } from "antd";


type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
    onRefund?: (amount: number) => Promise<void> | void;
};


export default function EarningDetailsModal({ open, setOpen }: Props) {



    return (
        <Modal
            open={open}
            footer={null}
            centered
            onCancel={() => setOpen(false)}
            closeIcon={false}
            width={680}
            bodyStyle={{ padding: 8 }}
            aria-labelledby="earning-details-title"
        >
            <h1></h1>
        </Modal>
    );
}

