export const InputField = ({
  icon: Icon,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
  children,
}) => (
  <div>
    <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-2 transition focus-within:ring-2 focus-within:ring-blue-500">
      <Icon className="text-gray-500" />
      {children ? (
        children
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
        />
      )}
    </div>
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);
