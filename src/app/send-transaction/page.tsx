import PageLayout from "@/shared/ui/page-layout";
import SendTransactionsPage from "@/pages/send-transaction/send-transaction-page";

export default function SendTransaction() {
    return (
        <PageLayout title="Send transaction">
            <SendTransactionsPage />
        </PageLayout>
    );
}
