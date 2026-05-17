"use client";
import { useState } from "react";
import { Modal, Popconfirm, message } from "antd";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Map } from "lucide-react";

type Route = {
  pickup: string;
  dropoff: string;
  time: string;
  distanceKm?: number;
};

export type EarningDetails = {
  id?: string | number;
  status?: "completed" | "pending" | "cancelled";
  paymentMethod?: string;
  totalAmount?: number;
  commission?: number;
  riderEarnings?: number;
  rider?: { name: string } | null;
  customer?: { name: string } | null;
  route?: Route;
  paymentStatus?: string;
  transactionDate?: string;
};

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  data?: EarningDetails | null;
  onRefund?: (amount: number) => Promise<void> | void;
};

const formatCurrency = (v = 0) => `GHC ${v.toFixed(2)}`;

export default function EarningDetailsModal({ open, setOpen, data = null, onRefund }: Props) {
  const [loading, setLoading] = useState(false);

  const d: EarningDetails = data ?? {
    id: "TXN-2024-001",
    status: "completed",
    paymentMethod: "Card",
    totalAmount: 40,
    commission: 4,
    riderEarnings: 36,
    rider: { name: "Kwame Mensah" },
    customer: { name: "Kofi Asante" },
    route: { pickup: "East Legon, Accra", dropoff: "Airport Residential Area", time: "2025-01-30 09:30 AM", distanceKm: 5.2 },
    paymentStatus: "Settled",
    transactionDate: "2025-01-30 09:30 AM",
  };

  const handleRefund = async (amount = 10) => {
    try {
      setLoading(true);
      await Promise.resolve(onRefund ? onRefund(amount) : Promise.resolve());
      message.success(`Refunded ${formatCurrency(amount)}`);
      setOpen(false);
    } catch (err) {
      message.error("Refund failed");
    } finally {
      setLoading(false);
    }
  };

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
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="earning-details-title" className="text-2xl font-semibold">Transaction Details</h3>
            <div className="text-sm text-muted-foreground mt-1">Transaction {String(d.id)} • {d.transactionDate}</div>
          </div>

          <div className="flex items-start gap-3">
            <Badge className={`rounded-md px-3 py-1 ${d.status === "completed" ? "bg-emerald-50 text-emerald-700" : d.status === "pending" ? "bg-blue-50 text-blue-700" : "bg-rose-50 text-rose-700"}`}>{d.status}</Badge>
          </div>
        </div>

        {/* Payment breakdown */}
        <Card className="bg-blue-50 border border-[#FFF085]">
          <CardContent>
            <div className="flex items-center justify-between gap-6 pt-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-blue-100 p-3">
                    <DollarSign className="text-blue-700" />
                  </div>

                  <div>
                    <div className="font-semibold">Payment Breakdown</div>
                    <div className="text-sm text-muted-foreground">Summary of the transaction and rider payout</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs text-muted-foreground">Total Amount</div>
                    <div className="mt-1 text-lg font-semibold">{formatCurrency(d.totalAmount)}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground">Commission (10%)</div>
                    <div className="mt-1 text-lg font-semibold">{formatCurrency(d.commission)}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground">Rider Earnings</div>
                    <div className="mt-1 text-lg font-semibold text-emerald-600">{formatCurrency(d.riderEarnings)}</div>
                  </div>
                </div>

                <div className="mt-4 border-t pt-3 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Payment Method</div>
                  <div className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-1 text-sm">{d.paymentMethod}</div>
                </div>
              </div>

             
            </div>
          </CardContent>
        </Card>

        {/* Rider / Customer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-[#F9FAFB]">
            <CardContent className="pt-3">
              <div className="text-sm text-muted-foreground">Rider Information</div>
              <p className="mt-2 text-sm text-[#6A7282]">Name</p>
              <div className="font-medium">{d.rider?.name ?? "—"}</div>
            </CardContent>
          </Card>

          <Card className="bg-[#F9FAFB]">
            <CardContent className="pt-3">
              <div className="text-sm text-muted-foreground">Customer Information</div>
              <p className="mt-2 text-sm text-[#6A7282]">Name</p>
              <div className="font-medium">{d.customer?.name ?? "—"}</div>
            </CardContent>
          </Card>
        </div>

        {/* Route details */}
        <Card className="pt-3 bg-[#F9FAFB]">
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Map className="text-slate-600" />
                    <div>
                      <div className="font-medium">Route Details</div>
                      <div className="text-sm text-muted-foreground">Pickup & dropoff information</div>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">{d.route?.time}</div>
                </div>

                <div className="mt-6 flex items-start gap-6">
                  <div className="flex flex-col items-center gap-6">
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    <div className="h-20 w-px bg-slate-200" />
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Pickup Location</div>
                        <div className="mt-2 font-medium">{d.route?.pickup}</div>
                      </div>

                      <div className="text-sm text-muted-foreground">Time</div>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="inline-flex items-center gap-2 rounded-md bg-muted/20 px-3 py-2">
                        <div className="font-medium">Distance Traveled</div>
                        <div className="text-blue-600 font-semibold">{d.route?.distanceKm ?? "—"} km</div>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-md bg-muted/20 px-3 py-2">
                        <Clock className="opacity-70" />
                        <div>{d.route?.time}</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-sm text-muted-foreground">Dropoff Location</div>
                      <div className="mt-2 font-medium">{d.route?.dropoff}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction status */}
        <Card className="pt-3 bg-[#F9FAFB]">
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-muted-foreground">Status</div>
                <div className="mt-2 flex items-center gap-3">
                  <Badge className="bg-emerald-50 text-emerald-700 border-0">{d.status}</Badge>
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground">Payment Status</div>
                <div className="mt-2 font-medium">{d.paymentStatus}</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground">Transaction Date</div>
                <div className="mt-2 font-medium">{d.transactionDate}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <Button variant="outline" size="default" onClick={() => setOpen(false)}>Close</Button>

          <Popconfirm
            title="Refund transaction"
            description={`Refund GHC 10.00 to customer?`}
            onConfirm={() => handleRefund(10)}
            okText="Refund"
            cancelText="Cancel"
          >
            <Button variant="default" size="default" className="bg-emerald-600 text-white">Refund GHC 10.00</Button>
          </Popconfirm>
        </div>
      </div>
    </Modal>
  );
}

