import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LoginPage() {
  const navigate = useNavigate();
  const { mutateAsync: login } = useMutation({
    mutationFn: (data) => api.auth.login(data),
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickSignUp = async () => {
    try {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;

      const data = { email, password };

      await login(data);

      alert("login-complete");
      navigate("/");
    } catch (err) {
      alert("login-failed");
    }
  };

  return (
    <div>
      <input
        ref={emailInputRef}
        type="email"
        placeholder="이메일을 입력해주세요."
      />
      <input
        ref={passwordInputRef}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <button onClick={handleClickSignUp}>로그인하기</button>
    </div>
  );
}

export default LoginPage;
