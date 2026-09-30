import type { FC } from "react";
import type { AuthPageProps } from "./AuthPage.types";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AuthPage.module.css";

const UserSchema = z.object({
  login: z.string(),
  email: z.email(),
  password: z.string(),
});

export const AuthPage: FC<AuthPageProps> = () => {
  const { register, handleSubmit: onSubmit } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const handleSubmit = (data: z.infer<typeof UserSchema>) => {
    console.log(data);
  };

  return (
    <form className={styles.authForm} onSubmit={onSubmit(handleSubmit)}>
      <p>Register Form</p>
      <div>
        <label>
          <span>Login</span>
          <input {...register("login")} />
        </label>
      </div>

      <div>
        <label>
          <span>Email</span>
          <input {...register("email")} />
        </label>
      </div>

      <div>
        <label>
          <span>Password</span>
          <input {...register("password")} />
        </label>
      </div>

      <input type="submit" className={styles.submitButton} value="Register" />
    </form>
  );
};
