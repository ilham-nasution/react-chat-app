export default function PrimaryButton({ label, ...rest }) {
  return (
    <button
      className="border px-4 py-2 bg-stone-700 text-white rounded-lg"
      {...rest}
    >
      {label}
    </button>
  );
}
