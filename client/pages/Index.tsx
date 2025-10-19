import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Headphones, Zap, Users, Eye, Ear } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4">
          <div className="container max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-primary">
                Accessibility at the core
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Learning Without Barriers
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AuraLearn transforms educational content for students with visual
              and hearing impairments. Convert documents to audio, lectures to
              text, and unlock a world of learning possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/text-to-speech">Start Learning Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted"
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground pt-8 border-t border-border">
              <div className="flex flex-col items-center">
                <span className="font-semibold text-2xl text-primary">100%</span>
                <span>Accessible</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-2xl text-secondary">
                  10K+
                </span>
                <span>Users Empowered</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-2xl text-accent">24/7</span>
                <span>Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 px-4 bg-card/50">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Powerful Features Built for You
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to learn your way. All designed with
                accessibility as the core principle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Text-to-Speech Card */}
              <div className="p-8 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Text-to-Speech
                </h3>
                <p className="text-muted-foreground mb-4">
                  Transform documents, PDFs, and lecture notes into
                  natural-sounding audio. Listen at your own pace with
                  adjustable speed and voice options.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Natural voice quality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Multiple language support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Speed and pitch control
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link to="/text-to-speech">Try Now</Link>
                </Button>
              </div>

              {/* Speech-to-Text Card */}
              <div className="p-8 rounded-lg border border-border bg-background hover:border-secondary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Headphones className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Speech-to-Text
                </h3>
                <p className="text-muted-foreground mb-4">
                  Convert lectures, classroom discussions, and audio files into
                  accurate, searchable text. Never miss important information
                  again.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    High accuracy transcription
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Real-time processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Speaker identification
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link to="/speech-to-text">Try Now</Link>
                </Button>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  Lightning Fast
                </h4>
                <p className="text-sm text-muted-foreground">
                  Advanced AI processes content in seconds, not minutes.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  Inclusive Design
                </h4>
                <p className="text-sm text-muted-foreground">
                  Built with and for users with diverse abilities and needs.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  Full Control
                </h4>
                <p className="text-sm text-muted-foreground">
                  Customize colors, fonts, and reading speeds to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section id="accessibility" className="py-20 md:py-32 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Accessibility First, Always
              </h2>
              <p className="text-lg text-muted-foreground">
                Designed for students with visual and hearing impairments, but
                beneficial for all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      For Visual Impairments
                    </h3>
                    <p className="text-muted-foreground">
                      Full screen reader support, high-contrast modes, and
                      keyboard-only navigation ensure content is accessible to
                      all.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Ear className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      For Hearing Impairments
                    </h3>
                    <p className="text-muted-foreground">
                      Captions, transcripts, and visual indicators ensure no
                      audio content is missed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      WCAG 2.1 AA Compliant
                    </h3>
                    <p className="text-muted-foreground">
                      We meet international accessibility standards to ensure
                      the broadest user base can access our platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      Continuous Improvement
                    </h3>
                    <p className="text-muted-foreground">
                      We regularly test with real users and accessibility
                      experts to improve the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-b border-border">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Break Down Barriers?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students who are learning on their own terms with
              AuraLearn.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/text-to-speech">Start Your Journey</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
