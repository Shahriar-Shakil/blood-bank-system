import React from "react";
import NotificationsPage from "@components/notifications/NotificationsPage";
import Layout from "@components/layout/main";

export default function Page() {
  return (
    <Layout title="Notifications">
      <NotificationsPage />
    </Layout>
  );
}
