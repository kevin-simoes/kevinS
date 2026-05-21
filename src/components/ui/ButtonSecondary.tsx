function ButtonSecondary({ children }: { children: React.ReactNode }) {
    return (
      <button
        className="
            flex items-center justify-center
            px-6 py-2
            border border-(--border)
            rounded-full
            bg-(--card)
            text-(--text-primary)
            font-light
            cursor-pointer
            outline-none
            hover:bg-(--border)
            transition
          "
      >
        {children}
      </button>
    );
  }
  
  export default ButtonSecondary;
  