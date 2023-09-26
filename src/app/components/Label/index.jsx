export default function Label({ isSticky = false, className, children }) {
  return (
    <div
      className={`inline-block px-2 py-1 rounded-md ${className} ${
        isSticky ? "absolute top-0 left-0" : "mb-4"
      } `}
    >
      <span className="">{children}</span>
    </div>
  );
}
