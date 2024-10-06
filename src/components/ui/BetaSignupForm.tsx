"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BetaSignupForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the email to your API
    console.log("Submitted email:", email);
    // Reset the form
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto w-full space-y-4">
      <h2 className="text-2xl font-semibold">Get Early Access</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-grow"
          aria-label="Email for beta access"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Join Beta</Button>
      </form>
      <p className="text-sm text-muted-foreground">No spam, ever.</p>
    </div>
  );
};

export { BetaSignupForm };
