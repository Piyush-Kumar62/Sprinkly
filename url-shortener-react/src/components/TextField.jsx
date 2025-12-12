import PropTypes from "prop-types";

const TextField = ({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    placeholder,
  }) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className={`${className ? className : ""} font-semibold text-md  `}
        >
          {label}
        </label>
  
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${
            className ? className : ""
          } px-2 py-2 border   outline-none bg-transparent  text-slate-700 rounded-md ${
            errors[id]?.message ? "border-red-500" : "border-slate-600"
          }`}
          {...register(id, {
            required: required ? { value: true, message } : undefined,
            minLength: min
              ? { value: min, message: "Minimum 6 character is required" }
              : undefined,
  
            pattern:
              type === "email"
                ? {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  }
                : type === "url"
                ? {
                    value:
                      /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                    message: "Please enter a valid url",
                  }
                : undefined,
          })}
        />
  
        {errors[id]?.message && (
          <p className="text-sm font-semibold text-red-600 mt-0">
            {errors[id]?.message}*
          </p>
        )}
      </div>
    );
  };
  
  export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  message: PropTypes.string,
  className: PropTypes.string,
  min: PropTypes.number,
  placeholder: PropTypes.string,
};