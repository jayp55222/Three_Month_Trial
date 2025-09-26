import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
});

const registerSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login_Register = () => {
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onLogin = (data: any) => {
    console.log("Login Data:", data);
  };

  const onRegister = (data: any) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 font-jost">
      <header className="mb-8 text-gray-500 text-sm">
        <span className="cursor-pointer hover:underline">Home</span> &gt;{" "}
        <span className="cursor-pointer hover:underline">My Account</span>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
        {/* Login Form */}
        <Card className="flex-1 max-w-lg shadow-none border-0">
          <CardHeader>
            <CardTitle className="text-left text-3xl font-medium">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLoginSubmit(onLogin)} className="space-y-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="login-username" className="text-left">
                  Username or email address <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="rounded-none"
                  id="login-username"
                  {...loginRegister("username")}
                />
                {loginErrors.username && (
                  <p className="text-red-500 text-sm">
                    {loginErrors.username.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="login-password">Password *</Label>
                <div className="relative">
                  <Input
                    className="rounded-none"
                    id="login-password"
                    type={showPasswordLogin ? "text" : "password"}
                    {...loginRegister("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    {showPasswordLogin ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {loginErrors.password && (
                  <p className="text-red-500 text-sm">
                    {loginErrors.password.message}
                  </p>
                )}
              </div>

              <div className="flex flex-row-reverse justify-end-safe gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox {...loginRegister("rememberMe")} id="remember-me" />
                  <Label
                    htmlFor="remember-me"
                    className="text-gray-500 font-normal"
                  >
                    Remember me
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-1/3 text-lg uppercase font-normal py-6 rounded-none"
                >
                  Log in
                </Button>
              </div>

              <a
                href="#"
                className="text-gray-500 text-sm hover:underline text-left"
              >
                Lost your password?
              </a>
            </form>
          </CardContent>
        </Card>

        <div className="hidden lg:block w-px bg-gray-200"></div>

        {/* Register Form */}
        <Card className="flex-1 max-w-lg shadow-none border-0 text-left">
          <CardHeader>
            <CardTitle className="text-left text-3xl font-medium">
              Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleRegisterSubmit(onRegister)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="register-username">Username *</Label>
                <Input
                  className="rounded-none"
                  id="register-username"
                  {...registerRegister("username")}
                />
                {registerErrors.username && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.username.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email address *</Label>
                <Input
                  className="rounded-none"
                  id="register-email"
                  type="email"
                  {...registerRegister("email")}
                />
                {registerErrors.email && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Password *</Label>
                <div className="relative">
                  <Input
                    className="rounded-none"
                    id="register-password"
                    type={showPasswordRegister ? "text" : "password"}
                    {...registerRegister("password")}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPasswordRegister(!showPasswordRegister)
                    }
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    {showPasswordRegister ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {registerErrors.password && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="outline"
                className="w-1/3 text-lg uppercase font-normal py-6 border-black border-2 rounded-none"
              >
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login_Register;
