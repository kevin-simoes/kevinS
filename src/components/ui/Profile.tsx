import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Profile() {
  return (
    <div className="flex items-center gap-1 text-2xl font-medium">
      <FiChevronLeft className="text-(--accent)" />

      <div className="typing-wrapper">
        <span className="typing-text"></span>
      </div>

      <FiChevronRight className="text-(--accent)" />
    </div>
  );
}

export default Profile;