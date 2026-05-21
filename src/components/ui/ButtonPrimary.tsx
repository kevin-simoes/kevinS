function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
          flex items-center justify-center
          px-6 py-2
          border border-(--border-button)
          rounded-full
          bg-(--accent)
          text-(--text-primary)
          font-light
          cursor-pointer
          outline-none
          hover:brightness-110
          transition
        "
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
