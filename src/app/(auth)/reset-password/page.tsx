import { Suspense } from "react";
import { ResetPasswordForm } from "./reset-password-form";

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<p className="p-6">Loading reset form...</p>}>
      <ResetPasswordForm />
    </Suspense>
  );
};

export default ResetPasswordPage;
