import PasswordResetRequestForm from "../../components/AuthForms/PasswordResetForm";

export default function PasswordResetPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
      <PasswordResetRequestForm />
    </div>
  );
}
