import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Rooms from "@/pages/Rooms";
import Amenities from "@/pages/Amenities";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Booking from "@/pages/Booking";
import { useEffect } from "react";
import { useLocation } from "wouter";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/amenities" component={Amenities} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/booking" component={Booking} />
          <Route>
            <div className="min-h-screen flex items-center justify-center bg-rose-50">
              <div className="text-center px-4">
                <p className="text-7xl font-bold text-rose-200 mb-4">404</p>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
                <p className="text-slate-500 mb-8">The page you're looking for doesn't exist.</p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:-translate-y-0.5 transition-transform duration-200"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
