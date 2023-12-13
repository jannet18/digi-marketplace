import { z } from "zod";

const AuthCredetialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be atleast 8 characters long.",
  }),
});
export default AuthCredetialsValidator;
