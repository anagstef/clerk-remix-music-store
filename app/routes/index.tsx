import MainLayout from "~/components/MainLayout";
import {useUser} from "@clerk/remix";

export default function Index() {
  const {user} = useUser();
  return (
    <MainLayout>
      <h2>Homepage</h2>
      <div>Welcome, {user?.fullName || user?.emailAddresses?.[0]?.emailAddress || 'Guest'}</div>
    </MainLayout>
  );
}
