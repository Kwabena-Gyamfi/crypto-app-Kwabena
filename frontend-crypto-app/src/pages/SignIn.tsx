import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { setProfile } from "../utils/profile";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      setProfile({ email });
    }
    navigate("/home");
  };

  return (
    <div className="pb-20">
      <Container className="grid min-h-[70vh] place-items-center py-10">
        <div className="w-full max-w-lg space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">Welcome back</h1>
            <p className="text-sm text-slate-600">
              Sign in to your demo account.
            </p>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-900 font-semibold">
                🔐 Demo app – Do not use your real password or credentials
              </p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm text-slate-600">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className="block text-sm text-slate-600">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
              />
            </label>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                Remember me
              </label>
              <span>Forgot password?</span>
            </div>
            <Button className="w-full" variant="primary" type="submit">
              Sign in
            </Button>
          </form>
          <p className="text-center text-sm text-slate-500">
            New to Coinbase?{" "}
            <Link to="/signup" className="text-[#0052ff]">
              Create an account
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;
