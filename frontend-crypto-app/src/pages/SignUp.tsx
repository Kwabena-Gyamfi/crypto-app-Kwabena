import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { setProfile } from "../utils/profile";
import { apiFetch } from "../services/api";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const name = [firstName, lastName].filter(Boolean).join(" ").trim();

    if (!name || !email || !password) {
      setError("Please provide your full name, email, and password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiFetch("/api/register", {
        method: "POST",
        credentials: "include",
        body: { name, email, password },
      });

      setProfile({ name: response.user.name, email: response.user.email });
      navigate("/home");
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20">
      <Container className="grid min-h-[70vh] place-items-center py-10">
        <div className="w-full max-w-lg space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">Create account</h1>
            <p className="text-sm text-slate-600">
              Create a demo account for this educational project.
            </p>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-900 font-semibold">
                🔐 Demo app – Do not use your real password or personal information
              </p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-600">
                First name
                <input
                  type="text"
                  placeholder=""
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </label>
              <label className="block text-sm text-slate-600">
                Last name
                <input
                  type="text"
                  placeholder=""
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </label>
            </div>
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
                placeholder="Create a strong password"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            {error ? (
              <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}
            <label className="flex items-center gap-2 text-xs text-slate-500">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              I agree to the Terms & Privacy policy.
            </label>
            <Button className="w-full" variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#0052ff]">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
