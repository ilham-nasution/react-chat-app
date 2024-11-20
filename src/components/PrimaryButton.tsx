export default function PrimaryButton({ label, ...rest }: any) {
  return (
    <button
      className="border px-4 py-2 bg-stone-700 text-white rounded-lg"
      {...rest}
    >
      {label}
    </button>
  );
}
