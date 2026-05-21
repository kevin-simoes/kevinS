import { LuMail } from "react-icons/lu";

function EmailButton() {
  const email = "kevinsimoeslima@gmail.com";
  const subject = "Contato pelo portfólio";
  const body = "Olá! Vi seu portfólio e gostaria de conversar sobre...";

  const emailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={emailLink} target="_blank">
    <div className="social-icon">
      <LuMail className="w-5 h-5"></LuMail>
    </div>
  </a>
  );
}

export default EmailButton