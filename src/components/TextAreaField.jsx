export const TextAreaField = ({
  icon: Icon,
  placeholder,
  name,
  value,
  onChange,
  error,
}) => (
  <div>
    <div className="flex items-start gap-3 rounded-xl border border-gray-300 px-4 py-2 transition focus-within:ring-2 focus-within:ring-blue-500">
      <Icon className="mt-1 text-gray-500" />
      <textarea
        rows={4}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none bg-transparent text-white placeholder-gray-400 outline-none"
      />
    </div>
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);
