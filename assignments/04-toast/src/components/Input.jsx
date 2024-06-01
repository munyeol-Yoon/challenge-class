function Input({ type, label, onChange, value, name }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm">{label}</label>}
      <input
        type={type ?? "text"}
        className="w-80 border rounded-md px-4 py-2.5"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}

export default Input;
