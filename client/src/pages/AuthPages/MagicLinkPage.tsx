import MagicLinkForm from "../../components/AuthForms/MagicLinkForm";

export default function MagicLinkPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Login With Magic Link</h2>
      <MagicLinkForm />
    </div>
  );
}
