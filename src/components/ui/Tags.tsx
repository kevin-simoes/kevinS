function Tags({
  children,
  link,
}: {
  children: React.ReactNode;
  link?: string;
}) {
  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center justify-center
        px-3 py-1
        border border-(--border)
        rounded-xl
        bg-(--card)
        text-(--text-tertiary)
        font-light
        outline-none
        transition
        hover:bg-(--border)
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Tags;
