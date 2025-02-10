import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform your business</span>
                <span className="block text-primary">with our SaaS solution</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Streamline your workflow, boost productivity, and scale your business with our powerful platform. Join thousands of satisfied customers today.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full">
                    Start Free Trial
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button size="lg" variant="outline" className="w-full">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4 sm:justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-br from-primary/30 to-primary sm:h-72 lg:h-full"></div>
      </div>
    </div>
  );
}