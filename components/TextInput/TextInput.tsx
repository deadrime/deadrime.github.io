import classNames from "classnames";

export const TextInput: React.FC<React.ComponentProps<'input'>> = ({ className, ...props}) => {
  return (
    <input
      className={classNames(
        className,
        'border-gray-600 p-2 text-text bg-gray-50 dark:bg-gray-800 rounded-md outline-none'
      )}
      {...props}
    />
  );
};
