const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 font-semibold">
      <p>{message}</p>  {/* Display the error message */}
    </div>
  );
};

export default ErrorMessage;
