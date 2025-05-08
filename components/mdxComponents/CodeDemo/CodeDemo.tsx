const CodeDemo: React.FC<{
  children: React.ReactNode
}> = ({ children }) => <div className="p-4 border-1 border-gray-100 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center bg-[#fafafa] dark:bg-transparent">
  {children}
</div>;

export default CodeDemo;
