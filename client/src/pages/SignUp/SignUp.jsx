import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <form className={styles.SignUp}>
      <div className={styles.Card}>
        <div className={styles.Left} />
        <div className={styles.Right}>
          <h2>회원가입</h2>
          <Input
            type="email"
            name="이메일"
            placeholder={"이메일을 입력하세요."}
          />
          <Input type="text" name="이름" placeholder={"이름 입력하세요."} />
          <Input
            type="password"
            name="비밀번호"
            placeholder={"비밀번호를 입력하세요."}
          />
          <Input
            type="password"
            name="비밀번호 확인"
            placeholder={"비밀번호를 한번 더 입력하세요."}
          />
          <Button title="회원가입" />
          <div className={styles.Bottom}>
            <Link to={"/signin"}>로그인</Link>
          </div>
        </div>
      </div>
    </form>
  );
}
