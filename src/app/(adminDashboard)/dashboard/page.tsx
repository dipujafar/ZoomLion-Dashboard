import StatContainer from "./_components/stats/StatContainer";
import UserOverViewChart from "./_components/userOverViewChart/UserOverViewChart";
import RecentAccountList from "./_components/recentAccountList/RecentAccountList";
import { RevenueChart } from "./_components/RevenueChart/RevenueChart";
import { WasteTypeDistribution } from "./_components/WasteTypeDistribution/WasteTypeDistribution";
import ZoneComparisonChart from "@/components/shared/ZoneComparisonChart";


const DashboardPage = () => {
  return (
    <div className="lg:space-y-7 space-y-5 ">
      <StatContainer></StatContainer>
      <UserOverViewChart></UserOverViewChart>
      <div className="flex lg:flex-row flex-col gap-x-5">
        <RevenueChart />
        <WasteTypeDistribution />
      </div>
      <ZoneComparisonChart />
      <RecentAccountList/>
    </div>
  );
};

export default DashboardPage;
