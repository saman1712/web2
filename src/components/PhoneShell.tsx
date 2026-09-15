export function PhoneShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-screen bg-sky">
      <div className={`phone-shell mx-auto min-h-screen w-full max-w-phone overflow-x-hidden bg-sky ${className}`}>
        {children}
      </div>
    </div>
  );
}
