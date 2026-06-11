export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1540px] px-3 sm:px-4 lg:px-5 xl:px-6 ${className}`}>
      {children}
    </div>
  );
}
