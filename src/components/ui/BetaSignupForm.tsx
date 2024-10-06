"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BetaSignupForm = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-md mx-auto w-full space-y-4">
      <h2 className="text-2xl font-semibold">Get Early Access</h2>
      <form
        action="https://formspree.io/f/manywbza"
        method="POST"
        className="flex flex-col sm:flex-row gap-4"
      >
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex-grow"
          aria-label="Email for beta access"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          onClick={() => {
            setEmail("");
          }}
        >
          Join Beta
        </Button>
      </form>
      <p className="text-sm text-muted-foreground">No spam, ever.</p>
    </div>
  );
};

export { BetaSignupForm };
