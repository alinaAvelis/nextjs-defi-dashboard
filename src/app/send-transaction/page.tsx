import PageLayout from "@/widjets/page-layout";
import SendTransactionsPage from "@/pages/send-transaction/send-transaction-page";

export default function SendTransaction() {
    return (
        <PageLayout title="Send Transaction">
            <SendTransactionsPage />
        </PageLayout>
    );
}
