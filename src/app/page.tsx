import { BetaSignupForm } from "@/components/ui/BetaSignupForm";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function LandingPage() {
  return (
    <>
      <header className="w-full border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          SageDoc
          <Badge variant="default" className="mx-2">
            Beta
          </Badge>
        </div>
      </header>
      <div className="min-h-screen flex flex-col items-center justify-between p-8 md:p-24 max-w-5xl mx-auto">
        <main className="flex-grow flex flex-col justify-center items-center text-center space-y-16 w-full">
          {/* Hero Section with Mailing List CTA */}
          <section className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Make developers fall in love with your docs
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Integrate a personalized ChatGPT for your docs within 1 hour. Join
              the waitlist today and get early access!
            </p>
            <BetaSignupForm />
          </section>

          {/* Demo Video Section */}
          <section className="w-full space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Sneak Peek</h2>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="MountainTech Beta Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">
              What to Expect
            </h2>
            <ul className="text-left space-y-4 max-w-md mx-auto">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Super-fast integration</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Tailored and trained on your own docs</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Efficiency gains for devs</span>
              </li>
            </ul>
          </section>
        </main>
        <footer className="w-full text-center text-sm text-muted-foreground mt-16">
          <p>&copy; 2024 SageDoc. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
